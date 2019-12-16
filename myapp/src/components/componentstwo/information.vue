<template>
  <router-view :certification='certification' :certified='certified'></router-view>
</template>
<script>
export default {
  data() {
    return {
      certification: '认证中',
      certified: '已认证'
    }
  }
}
</script>
<style lang='less' scoped>
</style>
