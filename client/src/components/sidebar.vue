<template id='sidebar'>
  <div class="sidebar">
    <div class="addNotebook">
      <b-button
        v-b-modal.modal-1
        @click="$bvModal.show('bv-modal-example')"
        type="button"
        class="Add"
      >Add</b-button>
      <addNotebook></addNotebook>
    </div>
    <div
      v-for="(sidebar, index) in sidebar"
      :key="index"
      :class="sidebar.listClass"
      :id="sidebar.bookId"
      @click="sendId(sidebar)"
    >
      <div class="book">
        <i :class="sidebar.iconClass"></i>
        {{sidebar.bookName}}
        <div @click.stop="trash($event)" v-if="sidebar.bookName==='Trash'" class="bookPopper">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <notebooks :notebooks="notebooks" :tag="false" v-if="sidebar.bookId===2" />
      <notebooks :notebooks="notebooks" :tag="true" v-if="sidebar.bookId===9" />
    </div>
  </div>
</template>

<script src="../scripts/sidebar.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
  flex: 1 1 auto;
  background-color: rgb(13, 13, 20);
  box-shadow: inset 0 0 10px #000;
  overflow: auto;
  display: flex;
  position: relative;
  flex-direction: column;
}
.book svg {
  margin: 6px 6px 6px 14px;
}
.book {
  display: flex;
  align-items: center;
}

button.Add {
  border: 1px solid;
  border-radius: 10px;
  height: 22px;
  width: 36px;
  position: absolute;
  right: 5px;
  top: 30px;
  background: none;
  color: rgb(102, 102, 102);
  transition: 0.6s;
  overflow: hidden;
  font-size: 13px;
  padding: 0;
}

button.Add:hover {
  cursor: pointer;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
}
</style>
