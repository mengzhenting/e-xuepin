<template>
  <div class="wrappe">
    <mycourse></mycourse>
    <div class="nav-all">
      <div class="nav">
        <p>{{list.title}}</p>
        <p class="contents">
          <span class="bar"></span>
          <span class="icon" :class="list.icon"></span>
        </p>
        <p class="liang">
          <span class="sucess">{{list.status}}</span>
          <span class="reload">{{list.edit}}</span>
        </p>
      </div>
      <p>
        <span class="iconfont icon-zhengque"></span>
      </p>
      <p class="title">{{lis.status}}</p>
      <p class="tip">{{lis.tip}}</p>
      <p class="add">继续上传</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lis: {
        status: '保存成功,等待审核',
        tip:
          '课程上传成功,正在等待人工审核,我们会在24小时后告知您审核结果,请耐心等候'
      },
      list: {
        title: '全民股东_201610241223.mp4',
        status: '上传成功 100%',
        edit: '',
        icon: 'iconfont icon-zhengque'
      }
    }
  },
  methods: {
    hidden() {
      console.log(this.$route.fullPath)
      if (this.$route.fullPath === '/password/allCourse/addclass/addclass') {
        this.list.edit = '重新上传'
      } else {
        this.list.edit = ''
      }
    }
  },
  watch: {
    $route() {
      this.hidden()
    }
  }
}
</script>
<style lang="less" scoped>
.wrappe {
  box-sizing: border-box;
  text-align: center;
  .nav-all {
    width: 900px;
    height: 585px;
    float: right;
    background-color: #fff;
    .nav {
      box-sizing: border-box;
      padding: 40px 28px 42px 40px;
      .contents {
        margin-top: 14px;
        margin-bottom: 14px;
      }
      .icon {
        padding-left: 15px;
        vertical-align: -1px;
        color: #2af;
        font-size: 14px;
      }
      .bar {
        display: inline-block;
        width: 800px;
        height: 8px;
        border-radius: 10px;
        background-color: #2af;
      }
      .liang {
        .sucess {
          font-size: 14px;
          color: #ccc;
        }
        .reload {
          color: #2af;
        }

        display: flex;
        justify-content: space-between;
      }
      height: 158px;
      background-color: #fafeff;
    }
    .iconfont {
      font-size: 100px;
      color: #2af;
    }
    .title {
      margin-top: 10px;
      margin-bottom: 15px;
      font-size: 18px;
    }
    .tip {
      font-size: 14px;
      color: #ccc;
      margin: 0 auto;
      width: 320px;
    }
    .add {
      margin: 0 auto;
      color: #fff;
      width: 160px;
      height: 44px;
      line-height: 44px;
      border-radius: 5px;
      margin-top: 20px;
      background-color: #2af;
    }
  }
}
</style>
