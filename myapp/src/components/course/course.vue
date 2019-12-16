<template>
  <div>
    <mycourse></mycourse>
    <div class="content">
      <router-link class="add" to="/password/allCourse/addclassall/addclass">
        <img :src="list.url" alt />
      </router-link>
      <p class="params">{{list.rule1}}</p>
      <p class="params">{{list.rule2}}</p>
      <p class="params">{{list.rule3}}</p>
      <p class="params">{{list.rule4}}</p>
      <p class="params">{{list.rule5}}</p>
      <p class="params">{{list.rule6}}</p>
      <p class="params">{{list.rule7}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        url: require('../../assets/add.png'),
        rule1: '1.不可上传未经授权的他人作品,以及色情,反动等违法视频22222',
        rule2: '2.不可上传未经授权的他人作品,以及色情,反动等违法视频',
        rule3: '3.不可上传未经授权的他人作品,以及色情,反动等违法视频',
        rule4: '4.不可上传未经授权的他人作品,以及色情,反动等违法视频',
        rule5: '5.不可上传未经授权的他人作品,以及色情,反动等违法视频',
        rule6: '6.不可上传未经授权的他人作品,以及色情,反动等违法视频',
        rule7: '7.不可上传未经授权的他人作品,以及色情,反动等违法视频'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  .add {
    margin-bottom: 30px;
  }
  padding-top: 100px;
  box-sizing: border-box;
  text-align: center;
  height: 586px;
  width: 900px;
  float: right;
  background-color: #fff;
  border-radius: 5px;
  .params {
    line-height: 38px;
    font-size: 13px;
    color: #999898;
  }
}
</style>
