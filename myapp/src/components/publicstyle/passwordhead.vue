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
        <router-link
          :to="item.to"
          class="mag"
          :key="item.id"
          v-for="item in mag"
          :class="item.id === active? 'actives' : ''"
          @click.native="handle(item.id)"
        >{{item.title}}</router-link>
        <router-link class="center-right" to="/password/allCourse/course">
          <span class="iconf iconfont icon-shizicha"></span>
          <p class="add">{{add}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: '',
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
          to: '/password/allCourse/auditfailure'
        },
        {
          id: 3,
          title: '我的问答',
          to: '/password/myreply'
        },
        {
          id: 4,
          title: '我的收入',
          to: '/password/income'
        }
      ]
    }
  },
  methods: {
    handle(id) {
      this.active = id
    }
  },
  mounted: function() {
    // 获取页面的路由
    var aa = this.$route.fullPath
    // 利用循环遍历出每一个路由 让路由和id相等
    this.mag.forEach(element => {
      if (element.to === aa) {
        this.active = element.id
      }
    })
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
      .mag.actives {
        color: #0caeff;
        position: relative;
      }
      .actives::after {
        content: '';
        height: 3px;
        width: 100%;
        background-color: #0caeff;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .mag {
        list-style: none;
        margin-right: 80px;
        line-height: 90px;
        float: left;
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
        text-decoration: none;
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
