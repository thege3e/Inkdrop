import notebooks from "../components/notebooks";
import axios from "axios";
import { bus } from "../main.js";
import sort from "../scripts/sort.js";
import addNotebook from "../components/addNotebookModal";
export default {
  template: "#sidebar",
  components: { notebooks, addNotebook },
  name: "sidebar",
  data() {
    return {
      sidebar: [],
      bookId: null,
      notebooks: []
    };
  },
  created() {
    bus.$on("onSelect", () => {
      this.sidebar.forEach(a => {
        a.listClass = a.listClass.split("onSelect")[0];
      });
    });
  },
  mounted() {
    axios.get("/static/sidebar.json").then(
      result => {
        this.sidebar = result.data.aside;
        this.sendId(this.sidebar[0]);
      },
      error => {
        console.log(error);
      }
    );
    axios.get("/Notebooks ").then(
      result => {
        this.notebooks = sort.sortedNotebooks(result.data);
        console.log(result.data);
      },
      error => {
        console.log(error);
      }
    );
  },
  methods: {
    sendId(sidebar) {
      let id = sidebar.bookId;
      console.log(id);
      if (id != 2 && id != 9 && id != 4) {
        this.bookId = id;
        bus.$emit("bookId", id);
        bus.$emit("status", id >= 5 && id <= 8 ? id - 4 : null);
        bus.$emit("onSelect");
        sidebar.listClass += " onSelect";
      }
    }
  }
};
