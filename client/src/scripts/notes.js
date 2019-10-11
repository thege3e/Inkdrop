import axios from "axios";
import { bus } from "../main.js";
import sort from "./sort.js";
export default {
  template: "#notes",
  name: "notes",
  data() {
    return {
      bookId: 0,
      search: "",
      scend: "Ascending",
      notes: [],
      sortBy: "Title",
      status: 0
    };
  },
  created() {
    bus.$on("bookId", id => {
      this.bookId = id;
      console.log("bookid", id);
      for (var i = 0; i < this.sortedNotes.length; i++) {
        if (this.sortedNotes[i].bookId === id) {
          this.selectNote(0, this.sortedNotes[i]);
          break;
        }
      }
    });
    bus.$on("status", status => {
      this.status = status;
      console.log("status:", status);
    });
    bus.$on("deleteNote", id => {
      console.log("delete note from sortedNotes", id);
      this.sortedNotes.some((a, i) => {
        if (a._id === id) {
          this.sortedNotes.splice(i, 1);
        }
      });
      var url = `/Notes/${id}`;
      axios.delete(url).then(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
    });
  },
  mounted() {
    this.getNotes();
  },
  computed: {
    sortedNotes() {
      return sort.sortedNotes(this.sortBy, this.notes);
    }
  },
  methods: {
    getNotes() {
      axios.get("/Notes ").then(
        result => {
          console.log(result.data);
          this.notes = result.data;
          this.selectNote(0, this.sortedNotes[0]);
        },
        error => {
          console.error(error);
        }
      );
    },
    selectNote(index, note) {
      bus.$emit("note", note);
      this.sortedNotes.forEach(a => {
        a === note ? (a.isClicked = true) : (a.isClicked = false);
      });
      console.log("selectnote");
    },
    noteTagColor(tag) {},
    addNote() {
      console.log("addnote");
      var obj = {
        noteId: this.notes.length,
        bookId: this.bookId,
        titleName: "",
        createdDate: new Date(),
        modifiedDate: new Date(),
        beautyDate: "1 seconds",
        tags: [],
        status: 0,
        isRemoved: false,
        isClicked: false,
        contentHeadline: "",
        content: "",
        revision: [{ content: "", date: "First" }],
        statIcon: 0,
        parentBook: "fwasdfae"
      };
      axios.post("http://localhost:8080/Notes", obj).then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
      this.sortedNotes.unshift(obj);
    }
  }
};
