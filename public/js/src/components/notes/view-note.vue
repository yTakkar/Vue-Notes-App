<template>

  <div >
    <transition name="fade" >
      <div class='view_note modal'>
        <div class="v_n_header modal_header">
          <span class='title'>View note</span>
        </div>
        <div class="v_n_middle modal_middle">
          <div class="v_n_info">
            <img src='/images/vue.png' alt="" />
            <div class="v_n_left">
              <span class='v_n_username'>You</span>
              <span class="v_n_time">{{ note.time | timeAgo }}</span>
            </div>
          </div>
          <span
            class='v_n_title'
            :contenteditable="editing"
            :class="{content_editor: editing}"
            spellCheck='false'
          >{{ note.title }}</span>

          <span
            class='v_n_content'
            :contenteditable="editing"
            :class="{content_editor: editing}"
            spellCheck='false'
          >{{ note.content }}</span>
        </div>
        <div class="v_n_bottom modal_bottom">

          <a
            v-if="editing"
            href="#"
            class="v_n_edit sec_btn"
            @click.prevent="editNote"
          >Done Editing</a>

          <a
            v-if="!editing"
            href="#"
            class="v_n_edit sec_btn"
            @click.prevent="_toggle('editing')"
          >Edit Note</a>

          <a
            href="#"
            class='v_n_delete sec_btn'
            :class="{sec_btn_disabled: editing}"
            @click.prevent="_toggle('deleting')"
          >Delete Note</a>

          <a
            href='#'
            class='v_n_cancel pri_btn'
            :class="{a_disabled: editing}"
            @click.prevent="Back"
          >Done</a>

        </div>
      </div>
    </transition>

    <Overlay v-if="deleting" :visible="true" />

    <Prompt
      v-if="deleting"
      title="Delete note"
      content="This note will be deleted. There's no undo so you won't be able to find it."
      actionText="Delete"
      @back="_toggle('deleting')"
      @action="deleteNote"
    />

  </div>

</template>

<script>
import $ from 'jquery'
import Notify from 'handy-notification'
import Prompt from '../others/prompt.vue'
import Overlay from '../others/overlay.vue'

export default {
  data(){
    return {
      note: {},
      deleting: false,
      editing: false
    }
  },
  methods: {
    Back(){
      window.history.back()
    },
    _toggle(what){
      switch (what) {
        case "editing":
          this.editing = !this.editing
          $('.v_n_edit').blur()
          break
        case "deleting":
          this.deleting = !this.deleting
          break
      }
    },
    deleteNote(){
      let { $http, $route: { params }, $store: { dispatch } } = this
      $http.post('/api/delete-note', { id: params.id }).then(s => {
        dispatch('DELETE_NOTE', params.id)
        this.Back()
        Notify({ value: s.body.mssg })
      })
    },
    editNote(){
      let { $http, $route: { params }, $store: { dispatch } } = this
      let update = {
        id: params.id,
        title: $('.v_n_title').text(),
        content: $('.v_n_content').text()
      }
      $http.post('/api/edit-note', update)
        .then(s => {
          this._toggle("editing")
          Notify({ value: 'Note Edited!!' })
          dispatch('EDIT_NOTE', update)
        })
    }
  },
  created(){
    let { $http, $route: { params: { id } }, $router } = this
    $http.post('/api/note-details', { id }).then(s => this.note = s.body )
    $http.post('/api/valid-note', { id }).then(s => !s.body ? $router.push('/notes') : null )
  },
  mounted(){
    $('.v_n_cancel').focus()
  },
  components: {
    'Prompt': Prompt,
    'Overlay': Overlay
  }
}
</script>

<style scoped>

</style>
