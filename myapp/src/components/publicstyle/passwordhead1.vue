<template>
  <div class="login">
    <div class="head">
      <div class="head-son clearBoth">
        <img class="employ" src="../../assets/js1.png" alt />
        <div class="head-right clearBoth">
          <span class="icon iconfont icon-arrow-down"></span>
          <p class="name" v-text="name">{{name}}</p>
          <img class="portrait" src="../../assets/js2_1.png" alt />
        </div>
      </div>
    </div>
    <div class="center">
      <div class="center-son">
        <p class="my" v-text="my">{{my}}</p>
        <router-link :to="item.to" class="mag" :key="item.id" v-for="item in mag">{{item.title}}</router-link>
        <div class="center-right">
          <span class="iconf iconfont icon-shizicha"></span>
          <p class="add">{{add}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      add: '添加课程',
      name: '罗密欧',
      my: 'My Center',
      mag: [
        {
          id: 1,
          title: '基本信息',
          to: '/password/information/myinfo'
        },
        {
          id: 2,
          title: '课程管理',
          to: ''
        },
        {
          id: 3,
          title: '我的问答',
          to: ''
        }
      ]
    }
  }
}
</script>
<style lang="less" scopet>
span {
  text-decoration: none;
}
.login {
  background-color: #f4f4f4;
  margin-bottom: 30px;
  .head {
    height: 40px;
    width: 100%;
    background-color: #333333;
    .head-son {
      width: 1200px;
      height: 40px;
      margin: 0 auto;
      .employ {
        float: left;
        padding-top: 5px;
      }
      .head-right {
        width: 300px;
        float: right;
        .portrait {
          float: right;
          padding-top: 5px;
          height: 30px;
        }
        .name {
          font-size: 15px;
          margin-left: 10px;
          float: right;
          color: aliceblue;
          line-height: 40px;
        }
        .icon {
          line-height: 40px;
          float: right;
          color: aliceblue;
          margin-left: 10px;
        }
      }
    }
  }
  .center {
    height: 90px;
    width: 100%;
    box-shadow: 0 0 5px #000;
    .center-son {
      width: 1200px;
      height: 90px;
      margin: 0 auto;
      overflow: hidden;
      // background-color: burlywood;
      .my {
        color: #49c2ff;
        font-size: 20px;
        float: left;
        font-weight: bold;
        line-height: 90px;
        margin-right: 90px;
      }
      .mag {
        list-style: none;
        margin-right: 80px;
        line-height: 90px;
        float: left;
        text-decoration: none;
        color: #333333;
      }
      .center-right {
        height: 30px;
        width: 160px;
        text-align: center;
        border-radius: 20px;
        float: right;
        border: 1px solid #d8d8d8;
        line-height: 30px;
        margin-top: 30px;
        .iconf {
          color: #2ebaff;
          // line-height: 90px;
        }
        .add {
          display: inline;
          color: #2ebaff;
          // line-height: 90px;
        }
      }
    }
  }
}
</style>
