<template>
  <div>
    <div :class="{overlay: !visible, hidden_overlay: visible}" ></div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
