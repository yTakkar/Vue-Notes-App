<template>
  <div class="notes_wrapper" >
    <router-view v-title data-title="Vue Notes App" ></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  created(){
    this.$store.dispatch('GET_NOTES')
  }
}
</script>

<style scoped>

</style>
