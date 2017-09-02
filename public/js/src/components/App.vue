<template>
  <div class="notes_wrapper" >
    <router-view v-title='title' ></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: "Vue Notes App"
    }
  },
  created(){
    this.$store.dispatch('GET_NOTES')
  }
}
</script>

<style scoped>

</style>
