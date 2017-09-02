<template>
  <div class="home">

    <div class="home_info">
      <span>{{ noOfNotes }}</span>
      <router-link to="/notes/create-note" class="pri_btn" >Create note</router-link>
    </div>

    <Note v-if="notes.length >= 0" :notes="notes" />
    <Nothing v-if="notes.length == 0" mssg="No notes. Go ahead and create one!!" />
    <End v-if="notes.length > 0" />

    <router-view name="create-note" v-title='createTitle'  />
    <router-view name="overlay" />

    <router-view name="view-note" v-title="viewTitle" />
    <router-view name="overlay" />

  </div>
</template>

<script>
import Note from './note.vue'
import Nothing from '../others/Nothing.vue'
import End from '../others/End.vue'

export default {
  data(){
    return {
      createTitle: 'Create Note',
      viewTitle: 'View Note'
    }
  },
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
