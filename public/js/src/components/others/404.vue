<template>
  <div class='error'>
    <div class="welcome_div error_div">
      <div class="error_info">
        <span>Oops, the page you're looking for does not exist!!</span>
      </div>
      <img src="/images/error-3.svg" alt="" />
      <div class="error_bottom">
        <router-link to='/notes' class="pri_btn error_login">Try going to homepage</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    }
  }
</script>
