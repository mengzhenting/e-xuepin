<template>
  <div class="nav">
    <div class="sort">
      <p class="all">
        <span class="iconfont icon-zhengque"></span>
        <span>全部</span>
      </p>
      <p>
        <span class="iconfont icon-yuanquan"></span>
        <span>待处理</span>
      </p>
    </div>
    <div class="submit">我要提问</div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.nav {
  border-radius: 5px;
  height: 104px;
  padding-left: 28px;
  padding-right: 42px;
  background-color: #fff;
  border-bottom:1px solid rgb(248, 245, 245);
  display: flex;
  justify-content: space-between;
  .sort {
    line-height: 104px;
    .iconfont {
      vertical-align: -2px;
      font-size: 20px;
      margin-right: 8px;
    }
    .icon-yuanquan {
      color: #ccc;
    }
    .all {
      margin-right: 70px;
    }
    .icon-zhengque {
      color: #00aaff;
    }
    display: flex;
  }
  .submit {
    cursor: pointer;
    text-align: center;
    line-height: 32px;
    border-radius: 10px;
    width: 160px;
    height: 32px;
    color: #fff;
    margin-top: 36px;
    background-color: #00aaff;
  }
}
</style>
