<template>
  <div class="home">

    <div class="home_info" v-title data-title="VueJS Notes App" >
      <span>{{ noOfNotes }}</span>
      <router-link to="/notes/create-note" class="pri_btn" >Create note</router-link>
    </div>

    <Note v-if="notes.length >= 0" :notes="notes" />
    <Nothing v-else-if="notes.length == 0" />
    <End v-if="notes.length > 0" />

    <router-view name="create-note" />
    <router-view name="overlay" />

    <router-view name="view-note" />
    <router-view name="overlay" />

  </div>
</template>

<script>
import Note from './note.vue'
import Nothing from '../others/Nothing.vue'
import End from '../others/End.vue'

export default {
  computed: {
    notes(){
      return this.$store.state.notes.notes
    },
    noOfNotes(){
      let
        l = parseInt(this.notes.length),
        no = l == 0 ? 'No Notes' : l == 1 ? '1 Note' : `${l} Notes`
      return no
    }
  },
  components: {
    'Note': Note,
    'Nothing': Nothing,
    'End': End
  }
}
</script>

<style>

</style>
