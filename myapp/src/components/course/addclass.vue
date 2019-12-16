<template>
  <div class="logo">
    <mycourse></mycourse>
    <div class="manage">
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
      <div class="content clearBoth">
        <div class="attribute">
          <p v-for="item in attribute" :key="item">{{item}}</p>
        </div>
        <div class="message">
          <p>
            <input class="input" type="text" name id placeholder="请输入课程标题" />
          </p>
          <p>
            <select class="input" name id>
              <option value>男</option>
              <option value>请选择课程分类</option>
            </select>
          </p>
          <p>
            <textarea class="textarea input" type="text" name id placeholder="请输入课程介绍" />
          </p>
        </div>
        <div class="submit">
          <router-link to="/password/allCourse/addclassall/addsuccess">
            <span class="btn save">保存信息</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      attribute: ['标题', '分类', '课程介绍'],
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
      if (this.$route.fullPath === '/password/allCourse/addclassall/addclass') {
        this.list.edit = '重新上传'
      } else {
        this.list.edit = ''
      }
    }
  },
  mounted() {},
  watch: {
    $route() {
      this.hidden()
    }
  }
}
</script>
<style lang="less" scoped>
.logo {
  width: 1200px;
  height: 586px;
  display: flex;
  .manage {
    width: 900px;
    height: 586px;
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
    .head {
      border-radius: 5px;
      line-height: 110px;
      padding-left: 50px;
      background-color: #fff;
      height: 110px;
    }
    .content {
      width: 900px;
      // height: 586px;
      float: right;
      border-radius: 5px;
      line-height: 60px;
      background-color: #fff;
      margin-top: 1px;
      padding-top: 22px;
      box-sizing: border-box;
      padding-left: 34px;
      .attribute {
        float: left;
        margin-right: 20px;
        color: #ccc;
        text-align: end;
      }
      .message {
        float: left;
        .input::placeholder {
          color: #ccc;
        }

        .input {
          outline: none;
          color: #ccc;
          text-indent: 16px;
          box-sizing: border-box;
          width: 740px;
          height: 44px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .textarea {
          padding: 16px 0 0 5px;
          font-size: 16px;
          resize: none;
          height: 170px;
        }
        color: #333;
      }
      .submit {
        margin-left: 76px;
        float: left;
        .save {
          color: #fff;
          background-color: #00aaff;
        }
        .quit {
          border: 1px solid #ccc;
        }
        .btn {
          cursor: pointer;
          box-sizing: border-box;
          margin: 0 10px;
          text-align: center;
          line-height: 40px;
          width: 158px;
          height: 44px;
          display: inline-block;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
