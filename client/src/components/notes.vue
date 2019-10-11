<template id='notes'>
  <div class="notes">
    <div class="note-header">
      <i
        style="margin-bottom: 5px;"
        class="fas fa-sort-amount-down"
        id="blueHover"
        aria-hidden="true"
      ></i>
      <h1 class="display-4">Notes</h1>
      <span class="icon is-medium" @click="addNote()">
        <i id="blueHover" class="fas fa-edit"></i>
      </span>
    </div>

    <div>
      <b-input-group>
        <b-form-input id="search" v-model="search" placeholder="Search..."></b-form-input>
        <template v-slot:append>
          <i class="fas fa-search"></i>
        </template>
      </b-input-group>
    </div>

    <hr class="line" />
    <div class="notePages">
      <div v-for="(note, index) in sortedNotes" :key="index" style="width:100%">
        <div
          class="note"
          :id="'Note'+note.noteId"
          v-if="(!note.isRemoved && bookId!=3 && ((bookId===note.bookId && note.status<3)  || (bookId===1 && note.status<3) || note.status===status  )) || (bookId===3 && note.isRemoved)"
          @click="selectNote(index,note)"
          :class="{color2: note.isClicked}"
        >
          <!-- parentchild[popchildindex].bookid->bookId   && note.status<3-->
          <div class="noteHeader">
            <p v-if="note.titleName===''" class="topic">
              <i
                :class="{'far fa-circle': (note.status===1), 'far fa-pause-circle': (note.status===2),
              'fas fa-check-circle': (note.status===3), 'fas fa-times-circle':(note.status===4)}"
              ></i>Untitled
            </p>
            <p v-else class="topic">
              <i
                :class="{'far fa-circle': (note.status===1), 'far fa-pause-circle': (note.status===2),
                                  'fas fa-check-circle': (note.status===3), 'fas fa-times-circle':(note.status===4)}"
              ></i>
              {{note.titleName}}
            </p>
          </div>
          <div class="info">
            <div class="head">
              <p style="width: 65px" :class="{since: !note.isClicked}">{{note.beautydate}}</p>
              <button
                v-for="(tag,index) in note.tags"
                :style="noteTagColor(tag)"
                class="AddTag"
                :key="index"
              >{{tag}}</button>
            </div>
            <p class="content">{{note.contentHeadline}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-center">
      <b-button id="popover-button-variant" >{{bookId}}</b-button>
      <b-popover target="popover-button-variant" variant="" triggers="focus">
        <template v-slot:title>
          Danger!
        <h6>Danger variant popover</h6>
        <button>Click here to navig</button>
        </template>
        
      </b-popover>
    </div>-->
  </div>
</template>

<script src='../scripts/notes.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src='../style/notes.css'></style>
