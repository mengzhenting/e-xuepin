<template>
  <div class="logon-page">
    <div class="log-left">
      <div class="log-logo">
        <p class="log-mode">
          <span class="chat">通过手机与验证码登录</span>
        </p>
        <input class="phone" type="text" placeholder="手机号" />
        <input class="phone" type="password" placeholder="密码" />
        <span class="password" href="javascript:;">忘记密码？</span>
        <router-link to="/personal" class="but">登陆啦</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.logon-page {
  display: flex;
  a {
    text-decoration: none;
  }
  .log-left {
    height: 810px;
    width: 839px;
    float: right;
    text-align: center;
    background-color: aqua;
    .log-logo {
      width: 525px;
      height: 460px;
      background-color: #fff;
      margin-top: 175px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      box-shadow: 0 0 5px #000;
      .log-mode {
        height: 100px;
        // background-color: #adc700;
        .account {
          width: 200px;
          display: inline-block;
          font-weight: bold;
          font-size: 17px;
          padding-bottom: 10px;
          color: #a6c200;
          border-bottom: 3px solid #a6c200;
          cursor: pointer;
        }
        .chat {
          width: 200px;
          display: inline-block;
          margin-top: 50px;
          font-size: 17px;
          padding-bottom: 10px;
          border-bottom: 3px solid #eeeeee;
          cursor: pointer;
        }
      }
      .phone {
        height: 20px;
        width: 400px;
        margin: 0 auto;
        margin-top: 50px;
        border: none;
        border-bottom: 1px solid #eeeeee;
        font-size: 17px;
        color: #b9bdc6;
        outline: none;
        display: block;
      }
      .password {
        color: #a5abb7;
        font-size: 18px;
        display: block;
        text-decoration: none;
        text-align: right;
        margin-right: 60px;
        padding-top: 10px;
      }
      .but {
        margin-top: 50px;
        height: 50px;
        width: 400px;
        border-radius: 20px;
        background-color: #adc700;
        color: #fff;
        font-size: 18px;
        display: block;
        line-height: 50px;
        text-decoration: none;
        margin-left: 64px;
        cursor: pointer;
      }
    }
  }
}
</style>
