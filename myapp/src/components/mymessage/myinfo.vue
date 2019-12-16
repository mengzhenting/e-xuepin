<template>
  <div>
    <Left></Left>
    <div class="wrapper">
      <div class="attribute">
        <p v-for="item in attribute" :key="item">{{item}}</p>
      </div>
      <div class="message">
        <p
          :class="index === 'phone' ? 'yanzheng':''"
          v-for="(item, index) in message"
          :key="item"
        >{{item}}</p>
      </div>
      <router-link class="edit" to="/password/information/editinfo">
        <span class="iconfont icon-bianji"></span>
        <span class="modify">编辑</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: {
        name: '刘子西',
        birth: '1997年3月27日',
        gender: '女',
        phone: '15634562485',
        mail: '2223015815@qq.com',
        idcard: '154245869545621458',
        weixin: 'liurui123456',
        qq: '2223015815'
      },
      attribute: [
        '姓名',
        '出生年月',
        '性别',
        '手机号',
        '邮箱',
        '身份证',
        '微信号',
        'qq号'
      ]
    }
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.wrapper {
  font-size: 14px;
  box-sizing: border-box;
  line-height: 52px;
  padding-top: 44px;
  padding-left: 30px;
  .attribute {
    margin-right: 30px;
    color: grey;
    text-align: end;
  }
  .message {
    .yanzheng::after {
      color: #9cc70b;
      padding-left: 20px;
      content: '√已验证';
    }
    color: #333;
  }
  .edit {
    cursor: pointer;
    .icon-bianji {
      padding-right: 5px;
    }
    font-weight: bolder;
    color: #00aaff;
    margin-left: 540px;
    text-decoration: none;
    font-size: 15px;
  }
  display: flex;
  height: 586px;
  width: 900px;
  background-color: #fff;
  border-radius: 5px;
}
</style>
