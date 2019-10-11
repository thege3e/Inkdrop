<template>
  <div>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        <i class="fa fa-book"></i>Create new notebook
      </template>
      <div class="d-block text-center">
        <b-form-input v-model="notebookName" placeholder="Enter notebook name"></b-form-input>
      </div>
      <b-button class="mt-3" @click="$bvModal.hide('bv-modal-example')">Cancel</b-button>
      <b-button
        class="mt-3"
        variant="success"
        @click="$bvModal.hide('bv-modal-example'); addNotebook()"
      >Create</b-button>
    </b-modal>
  </div>
</template>
<script>
import { bus } from "../main.js";
export default {
  template: "#addNotebook",
  data() {
    return {
      notebookName: ""
    };
  },
  methods: {
    addNotebook() {
      console.log("addnotebook");
      bus.$emit("addNotebook", this.notebookName);
    }
  }
};
</script>