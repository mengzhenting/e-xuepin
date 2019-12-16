<template>
  <div class="login">
    <mycourse></mycourse>
    <div class="pass-login clearBoth">
      <div class="login-information clearBoth">
        <div class="login-password">
          <p class="login-top">我的问答111</p>
        </div>
        <div class="login-bottom">
          <div class="input-password">
            <p class="password" :key="item.id" v-for="item in password">
              {{item.list}}
              <input
                class="primary-password"
                type="password"
                :placeholder="item.title"
              />
            </p>
          </div>
          <div class="btn btns">确认修改</div>
          <div class="btn">取消修改</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: [
        {
          id: 1,
          list: '原密码',
          title: '请输入原密码'
        },
        {
          id: 2,
          list: '新密码',
          title: '请输入新密码'
        },
        {
          id: 3,
          list: '确认密码',
          title: '请再次输入新密码'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
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
    .login-information {
      width: 900px;
      height: 585px;
      background-color: #fff;
      float: left;
      .login-password {
        height: 110px;
        border-bottom: 2px solid #e9e9e9;
        .login-top {
          margin: 50px 0 40px 50px;
          display: inline-block;
        }
      }
      .login-bottom {
        width: 550px;
        color: #868686;
        height: 280px;
        padding-top: 40px;
        .input-password {
          text-align: right;
          .primary-password {
            height: 40px;
            width: 400px;
            margin-top: 15px;
            border-radius: 5px;
            text-indent: 10px;
            border: 1px solid #e9e9e9;
          }
        }
        .btn {
          text-align: center;
          border: 1px solid #ddd4d4;
          line-height: 45px;
          display: inline-block;
          width: 160px;
          height: 45px;
          margin-top: 20px;
          margin-right: 20px;
          border-radius: 5px;
        }
        .btns {
          margin-left: 150px;
          color: #fff;
          background-color: #0caeff;
        }
      }
    }
  }
}
</style>
