import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { bus } from "../main.js";
import date from "../scripts/date";
import axios from "axios";
export default {
  template: "#noteboard",
  name: "noteboard",
  created() {
    bus.$on("note", note => {
      console.log(note.noteId);
      this.note = note;
    });
    console.log(this.editor);
  },
  watch: {
    note(val) {
      this.editorData = val.content;
      this.noteTitle = val.titleName;
      this.createdDate = date.get(new Date(val.createdDate));
      this.updatedDate = date.get(new Date(val.modifiedDate));
    }
  },
  methods: {
    editTopic() {
      this.note.titleName = this.noteTitle;
      if (this.noteEdited === -1) {
        this.count();
        this.noteEdited = 0;
      } else {
        this.noteEdited = 0;
      }
      console.log("editTopic");
    },
    editContent() {
      console.log("edit content");
      this.note.content = this.editorData;
      var tag = document.createElement("div");
      tag.innerHTML = this.editorData;
      this.note.contentHeadline = tag.innerText.slice(0, 70);
      if (this.noteEdited === -1) {
        this.count();
        this.noteEdited = 0;
      } else {
        this.noteEdited = 0;
      }
      console.log("editContent");
    },
    deleteNote() {
      if (!this.note.isRemoved) {
        this.note.isRemoved = true;
      } else {
        bus.$emit("deleteNote", this.note._id);
      }
    },
    count() {
      this.interval = setInterval(() => {
        this.noteEdited++;
        console.log("noteedit", this.noteEdited);
        if (this.noteEdited === 7) {
          let note = this.note;
          clearInterval(this.interval);
          var url = `http://localhost:8080/Notes/${note._id}`;
          axios
            .put(url, {
              content: note.content,
              contentHeadline: note.contentHeadline,
              titleName: note.titleName
            })
            .then(
              result => {
                console.log(result);
              },
              error => {
                console.log(error);
              }
            );
          this.noteEdited = -1;
          console.log("noteedit", this.noteEdited);
        }
      }, 1000);
    }
  },
  data() {
    return {
      note: {},
      noteTitle: "",
      noteTag: "",
      noteEdited: -1,
      interval: "",
      createdDate: "",
      updatedDate: "",
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      }
    };
  }
};
