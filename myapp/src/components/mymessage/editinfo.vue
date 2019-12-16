<template>
  <div>
    <Left></Left>
    <div class="wrapper">
      <div class="attribute">
        <p v-for="item in attribute" :key="item">{{item}}</p>
      </div>
      <div class="message">
        <p>
          <input class="input" type="text" name id :value="message.name" />
        </p>
        <p>
          <input class="input" type="text" name id placeholder="此项不可输入,身份验证完自动同步" />
        </p>
        <p>
          <select class="input" name id>
            <option value>女</option>
            <option value>男</option>
          </select>
        </p>
        <p class="yanzheng">
          <input class="input phone" type="text" name id :value="message.phone" />
          <span class="yanzhengma">获取验证码</span>
        </p>
        <p>
          <input class="input" type="text" name id :value="message.mail" />
        </p>
        <p>
          <input class="input" type="text" name id :value="message.idcard" />
        </p>
        <p>
          <input class="input" type="text" name id :value="message.weixin" />
        </p>
        <p>
          <input class="input" type="text" name id :value="message.qq" />
        </p>
      </div>
      <div class="submit">
        <span class="btn save">确认修改</span>
        <router-link class="btn quit" to="/password/information/myinfo">取消修改</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: {
        name: '江小白',
        birth: '1998年8月8日',
        gender: '男',
        phone: '1888888888',
        mail: '1206020983@qq.com',
        idcard: '12345678934567895432',
        weixin: 'mengzhenting123456',
        qq: '1206020983'
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
    .input::placeholder {
      color: #ccc;
    }
    select.input {
      color: #ccc;
    }

    .input {
      outline: none;
      color: #333;
      text-indent: 16px;
      box-sizing: border-box;
      width: 400px;
      height: 44px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .phone {
      width: 300px;
    }
    .yanzheng {
      .input {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-right: 0px;
      }
      .yanzhengma {
        border-radius: 5px;
        padding: 10px 14px 13px;
        border: 1px solid #ccc;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
      position: relative;
    }
    .yanzheng::after {
      position: absolute;
      right: 109px;
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
  }
  .submit {
    .save {
      color: #fff;
      background-color: #00aaff;
    }
    .quit {
      border: 1px solid #ccc;
      text-decoration: none;
      color: #333;
    }
    .btn {
      cursor: pointer;
      box-sizing: border-box;
      margin: 0 10px;
      text-align: center;
      line-height: 44px;
      width: 158px;
      height: 44px;
      display: inline-block;
      border-radius: 5px;
    }
    margin-left: 78px;
  }
  display: flex;
  flex-wrap: wrap;
  height: 586px;
  width: 900px;
  background-color: #fff;
  border-radius: 5px;
}
</style>
