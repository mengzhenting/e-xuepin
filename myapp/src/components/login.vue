<template>
  <div class="logon-page">
    <div class="logo">
      <div class="logo-all">
        <img src="../assets/1.png" alt />
        <div class="logo-right clearBoth">
          <p class="register">{{register}}</p>
          <p class="p">{{p}}</p>
          <p class="logon">{{logon}}</p>
        </div>
      </div>
    </div>
    <div class="log clearBoth">
      <div class="log-right clearBoth">
        <div class="log-list">
          <div class="student-top">
            <span class="iconfont icon-xuesheng icon"></span>
            <p class="student">我是学生</p>
          </div>
          <div class="lecturer-center">
            <span class="iconfont icon-jiangshi iconf"></span>
            <p class="lecturer">我是讲师</p>
          </div>
          <div class="hr-bottom">
            <span class="iconfont icon-nv iconfo"></span>
            <p class="hr">我是HR</p>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      register: '注册',
      p: '|',
      logon: '登录'
    }
  }
}
</script>
<style lang="less" scopet>
.logon-page {
  .logo {
    height: 90px;
    width: 100%;
    box-shadow: 0 0 5px #000;
    .logo-all {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      img {
        height: 50px;
        margin-top: 20px;
      }
      .logo-right {
        line-height: 90px;
        .register {
          display: inline;
          cursor: pointer;
        }
        .p {
          display: inline;
          margin-left: 5px;
          margin-right: 5px;
        }
        .logon {
          display: inline;
          cursor: pointer;
        }
      }
    }
  }
  .log {
    width: 100%;
    height: 810px;
    margin-top: 30px;
    display: flex;
    .log-right {
      width: 512px;
      height: 810px;
      background-image: url(../assets/2.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .log-list {
        width: 110px;
        height: 460px;
        // background-color: aqua;
        float: right;
        margin-top: 175px;
        .student-top {
          height: 115px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          background-color: #202421;
          .icon {
            padding-top: 36px;
            display: block;
            font-size: 25px;
            margin-bottom: 5px;
          }
        }
        .lecturer-center {
          height: 230px;
          font-size: 14px;
          color: #fff;
          background-color: #adc700;
          text-align: center;
          .iconf {
            display: block;
            padding-top: 100px;
            margin-bottom: 5px;
            font-size: 25px;
          }
        }
        .hr-bottom {
          height: 115px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          background-color: #202421;
          .iconfo {
            padding-top: 36px;
            display: block;
            font-size: 25px;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
}
</style>
