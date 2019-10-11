import { bus } from "../main.js";
import axios from "axios";
import sort from "../scripts/sort";
export default {
  template: "#notebooks",
  name: "notebooks",
  props: ["tag", "notebooks"],
  data() {
    return {
      lastBookId: 15
    };
  },
  created() {
    bus.$on("onSelect", () => {
      this.notebooks.forEach(a => {
        a.listClass = a.listClass.split("onSelect")[0];
      });
    });
    bus.$on("addNotebook", notebookName => {
      let notebook = {
        bookId: ++this.lastBookId,
        parentId: 2,
        bookName: notebookName,
        listClass: "childBook pcursor",
        isClicked: true,
        iconClass: "fas fa-caret-down",
        padding: 10,
        iconColor: ""
      };
      this.notebook.unshift(notebook);
      var url = `http://localhost:8080/Notebooks`;
      axios.post(url, notebook).then(
        result => {
          console.log(result);
        },
        error => {
          console.log(error);
        }
      );
      this.noteEdited = -1;
    });
  },
  computed: {},
  methods: {
    determineComponentType(id) {
      if (this.tag && id === 9) {
        return true;
      }
      if (!this.tag && id != 9) {
        return true;
      }
    },
    notebookPad(pad) {
      return this.tag ? "padding-left: 10px" : `padding-left:${pad + 2}px`;
    },
    sendId(id, index) {
      this.bookId = id;
      bus.$emit("bookId", id);
      bus.$emit("onSelect");
      this.notebooks[index].listClass += " onSelect";
    }
  }
};
