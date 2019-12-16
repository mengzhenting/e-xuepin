<template>
  <div class="login">
    <Head></Head>
    <div class="pass-login">
      <!-- <Left></Left> -->
      <router-view></router-view>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
export default {}
</script>
<style lang='less' scoped>
span {
  text-decoration: none;
}
.login {
  background-color: #f4f4f4;
  .pass-login {
    background-color: #f4f4f4;
    width: 1200px;
    height: 585px;
    margin: 0 auto;
  }
}
</style>
