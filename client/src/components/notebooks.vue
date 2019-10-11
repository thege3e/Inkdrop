<template id='notebooks'>
  <div class="notebooks">
    <div
      v-for="(notebook, index) in notebooks"
      :key="index"
      @click="sendId(notebook.bookId, index)"
    >
      <div
        :class="notebook.isClicked"
        :id="notebook.bookId"
        v-if="determineComponentType(notebook.parentId)"
      >
        <div
          :class="notebook.listClass"
          class="lookSide"
          style="cursor: pointer;"
          :style="notebookPad(notebook.padding)"
        >
          <div class="child">
            <div class="carets" style="height:28px; width: 30px">
              <i :class="notebook.iconClass" :style="{color: notebook.iconColor}"></i>
            </div>
            <div class="childName">{{notebook.bookName}}</div>
            <div @click="showOptions(notebook)" :class="notebook.bookId" class="bookPopper">
              <i class="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/notebooks.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.child {
  cursor: pointer;
  color: rgb(223, 223, 223);
  padding: 0px 6px 0px 0px;
  display: flex;
  flex-direction: row;
  height: 27px;
  position: relative;
  align-items: center;
}
.childName {
  overflow: hidden;
  white-space: nowrap;
}
</style>
