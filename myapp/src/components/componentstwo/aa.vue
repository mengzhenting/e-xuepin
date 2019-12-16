<template>
  <div class="login">
    <router-view :mag="mag" :maa="maa"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mag: '复式空间',
      maa: '按时'
    }
  }
}
</script>
<style lang="less" scoped>
span {
  text-decoration: none;
}
.login {
  height: 300px;
  width: 300px;
  background-color: #a18e8e;
}
</style>
