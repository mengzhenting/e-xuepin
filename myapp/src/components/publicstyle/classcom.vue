<template>
  <div class="nav">
    <div class="sort">
      <router-link :to="item.to" class="all" v-for="item in list" :key="item.id">
        <span class="iconfont" :class="active === item.id ? 'icon-zhengque':'icon-yuanquan'"></span>
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      list: [
        {
          id: 1,
          title: '已发布课程',
          to: '/password/allCourse/published'
        },
        {
          id: 2,
          title: '审核中课程',
          to: '/password/allCourse/reviewing'
        },
        {
          id: 3,
          title: '未通过审核课程',
          to: '/password/allCourse/auditfailure'
        }
      ]
    }
  },
  mounted() {
    this.handle()
  },
  methods: {
    handle() {
      this.list.forEach(element => {
        if (element.to === this.$route.fullPath) {
          this.active = element.id
        }
      })
    }
  },
  watch: {
    $route() {
      this.handle()
    }
  }
}
</script>
<style lang="less" scoped>
.nav {
  box-sizing: border-box;
  border-bottom: 2px solid #f4f4f4;
  border-radius: 5px;
  height: 104px;
  padding-left: 28px;
  padding-right: 42px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  .sort {
    line-height: 104px;
    .iconfont {
      vertical-align: -2px;
      font-size: 25px;
      margin-right: 8px;
    }
    .icon-yuanquan {
      color: #ccc;
    }
    .all {
      color: #000;
      margin-right: 70px;
      text-decoration: none;
    }
    .icon-zhengque {
      color: #00aaff;
    }
    display: flex;
  }
}
</style>
