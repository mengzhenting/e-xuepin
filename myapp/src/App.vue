<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this)
    this.axios.get('/api/getList').then(res => {
      console.log(res)
    })
  }
}
</script>
<style>
</style>
