<template>
  <div class='home_last_mssg'>
    <img src='/images/large.jpg' />
    <span>{{ mssg }}</span>
  </div>
</template>

<script>
export default {
  props: {
    mssg: {
      default: 'Hello, a message for you!!',
      type: String
    }
  }
}
</script>

<style scoped>

</style>
