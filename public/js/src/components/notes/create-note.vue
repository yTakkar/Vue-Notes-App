<template>

  <div class='create_note modal'>
    <transition name='fade' >
      <form @submit.prevent='createNote' >

        <div class="c_n_header modal_header">
          <span class="title" >Create a note</span>
        </div>

        <div class="c_n_middle modal_middle">
          <input
            type="text"
            placeholder='Title..'
            ref='title'
            required
            spellCheck="false"
            autoComplete="false"
            autoFocus
          />
          <textarea
            placeholder='Your note..'
            ref='content'
            required
            spellCheck='false'
            autoComplete='false'
          ></textarea>
        </div>

        <div class="c_n_bottom modal_bottom">
          <a href="#" class='c_n_cancel sec_btn' @click.prevent="Back" >Back</a>
          <input type="submit" class='c_n_add pri_btn' value='Add note' />
        </div>

      </form>
    </transition>
  </div>

</template>

<script>
import Notify from 'handy-notification'

export default {
  methods: {
    Back(){
      window.history.back()
    },
    createNote(){
      let { title, content } = this.$refs
      this.$http.post('/api/create-note', { title: title.value, content: content.value })
        .then(s => {
          this.$store.dispatch('CREATE_NOTE', s.body)
          title.value = ''
          content.value = ''
          this.Back()
          Notify({ value: 'Note Created!!' })
        })
    }
  }
}
</script>

<style scoped>

</style>
