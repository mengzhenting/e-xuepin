<template>
  <div class="pass-right">
    <img class="pass-img" src="../../assets/js2.png" alt />
    <div class="information">
      <router-link
        class="information-my"
        :class="item.id === active? 'actives' : ''"
        :key="item.id"
        v-for="item in info"
        :to="item.to"
        @click.native="handle(item.id)"
      >
        <span :class="item.icon" class="iconf"></span>
        <span class="my">{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: '',
      info: [
        {
          id: 1,
          title: '我的信息',
          icon: 'iconfont icon-touxiang',
          to: '/password/information/myinfo'
        },
        {
          id: 2,
          title: '认证信息',
          icon: 'iconfont icon-renzheng',
          to: '/password/information/authentication'
        },
        {
          id: 3,
          title: '密码管理',
          icon: 'iconfont icon-shezhi',
          to: '/password'
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
    this.info.forEach(element => {
      if (element.to === aa) {
        this.active = element.id
      }
    })
  }
}
</script>
<style lang="less" scopet>
.pass-right {
  width: 280px;
  height: 585px;
  margin-right: 20px;
  background-color: #fff;
  float: left;
  .pass-img {
    width: 100px;
    height: 100px;
    padding-left: 90px;
    margin-top: 50px;
  }
  .information {
    height: 130px;
    width: 100px;
    padding-left: 90px;
    margin-top: 50px;
    font-size: 18px;
    .information-my {
      margin-bottom: 30px;
      text-decoration: none;
      display: flex;
      .my {
        color: #868686;
      }
      .iconf {
        color: #1e1e1f;
        margin-right: 5px;
        font-size: 20px;
      }
    }
    .actives .my,
    .actives .iconf {
      color: #0caeff;
    }
  }
}
</style>
