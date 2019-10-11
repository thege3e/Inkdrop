<template id='noteboard'>
  <div class="noteboard">
    <div style="display: flex">
      <div class="actions">
        <i
          id="blueHover"
          data-toggle="tooltip"
          title="back"
          class="fas fa-angle-left"
          @click="toggleNote('left')"
        ></i>
        <i
          id="blueHover"
          data-toggle="tooltip"
          title="forward"
          class="fas fa-angle-right"
          @click="toggleNote('right')"
        ></i>
      </div>
      <i style="margin: 0;"></i>
      <i class="fas fa-book"></i>First Notebook
      <i class="fas fa-caret-down"></i>
      <li class="date 1">Created:{{createdDate}}</li>
      <li class="date 2">Updated:{{updatedDate}}</li>
      <div @click="deleteNote()">
        <i class="fas fa-trash-alt"></i>
      </div>
      <i class="fas fa-history"></i>
    </div>
    <div class="callPage">
      <input
        class="Topic Placeholder"
        type="text"
        placeholder="Untitled"
        v-model="noteTitle"
        @blur="editTopic()"
      />
    </div>
    <div class="more">
      <i class="status"></i>Status
      <i class="fas fa-caret-down giveTrig"></i>
      <input
        class="Tags Placeholder"
        v-model="noteTag"
        type="text"
        placeholder="Add tags"
        aria-hidden="true"
        @keyup.delete="deleteTag(noteTag)"
        @focus="targeted=2"
        @keyup="tagDrop(noteTag)"
        @keyup.enter="dropToTag(noteTag, false)"
      />
    </div>
    <ckeditor
      id="editor"
      :editor="editor"
      @input="editContent()"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script src="../scripts/noteboard.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noteboard {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.callPage {
  display: flex;
}

div.callPage input.Topic {
  height: 36px;
  font-size: 30px;
  border: 0;
  flex: 1 1 auto;
}

input.Tags {
  border: 0;
}

.more {
  display: flex;
}

input:focus,
button:focus {
  box-shadow: 0;
  border-color: 0;
  outline: 0 none;
}

.Placeholder::-webkit-input-placeholder {
  color: rgb(185, 185, 185);
}
.Placeholder:focus::-webkit-input-placeholder {
  color: rgb(136, 136, 136);
}
</style>
