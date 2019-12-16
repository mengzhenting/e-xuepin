<template>
  <div class="personal-balance">
    <Head1></Head1>
    <div class="personal clearBoth">
      <div class="balance-all">
        <div class="balance-top">
          <img src="../../assets/js2.png" alt />
          <div class="information">
            <div class="name-list">
              <p class="name">{{name}}</p>
              <span class="icon iconfont icon-nvhai"></span>
            </div>
            <div class="integrity">
              <p class="information-integrity">信息完整度</p>
              <p class="progress"></p>
              <p class="high">高</p>
            </div>
            <div class="iconf">
              <span class="iconfo iconfont icon-shouji"></span>
              <span class="iconfont icon-zhengjianshenfenzheng"></span>
              <span class="iconfont icon-xinjian"></span>
            </div>
          </div>
        </div>
        <div class="balance-center">
          <div class="apply">
            <div class="apply-carry">申请提现</div>
            <div class="account">
              <p class="balance">账户余额</p>
              <span class="number">234</span>
              <span class="element">元</span>
            </div>
          </div>
        </div>
        <div class="balance-bottom">
          <div class="img-title">
            <div class="img-icon">
              <span class="icon iconfont icon-shenfenzhenghaomaguizheng"></span>
            </div>
            <span class="id">身份认证</span>
            <span class="uncertified">【未认证】</span>
          </div>
          <div class="img-title">
            <div class="img-icon">
              <span class="icon iconfont icon-zizhirenzheng-"></span>
            </div>
            <span class="id">资质认证</span>
            <span class="uncertified">【未认证】</span>
          </div>
        </div>
      </div>
      <div class="upload">
        <div class="answers">
          <p class="upload-my">我上传的课程</p>
          <div class="number">
            <span class="san">3</span>
            <span class="individual">个</span>
          </div>
          <p>查看详情></p>
        </div>
        <div class="answers">
          <p class="upload-my">我上传的课程</p>
          <div class="number">
            <span class="san">3</span>
            <span class="individual">个</span>
          </div>
          <p>查看详情></p>
        </div>
      </div>
      <div class="newest-student">
        <div class="student-time">
          <h3>最新学员</h3>
          <p class="new-student">一周内新增25位新学员</p>
        </div>
        <div class="student-img" :key="item.id" v-for="item in img">
          <img class="student-src" :src="item.src" alt />
          <p class="student-name">{{item.title}}</p>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '罗密欧',
      img: [
        {
          id: 1,
          src: require('../../assets/images/per2_1.png'),
          title: '大媳妇'
        },
        {
          id: 2,
          src: require('../../assets/images/per2_3.png'),
          title: '二媳妇'
        },
        {
          id: 3,
          src: require('../../assets/images/per2_5.png'),
          title: '三媳妇'
        },
        {
          id: 4,
          src: require('../../assets/images/per2_7.png'),
          title: '四媳妇'
        },
        {
          id: 5,
          src: require('../../assets/images/per2_9.png'),
          title: '五媳妇'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.personal-balance {
  background-color: #f4f4f4;
  .personal {
    width: 1200px;
    height: 550px;
    margin: 0 auto;
    .balance-all {
      width: 450px;
      height: 550px;
      float: left;
      background-color: #fff;
      border-radius: 5px;
      .balance-top {
        height: 150px;
        // background-color: #fff;
        border-bottom: 2px solid #fafafa;
        display: flex;
        padding: 30px 50px 30px 30px;
        box-sizing: border-box;
        img {
          margin-right: 30px;
          width: 88px;
          height: 88px;
        }
        .information {
          width: 252px;
          .name-list {
            .name {
              color: #a0a0a0;
              font-size: 17px;
              float: left;
            }
            .icon {
              color: #d4237a;
              margin-left: 5px;
              font-size: 20px;
            }
          }
          .integrity {
            margin-top: 15px;
            .information-integrity {
              color: #a0a0a0;
              font-size: 15px;
              display: inline-block;
            }
            .progress {
              width: 130px;
              height: 10px;
              background-color: #00aaff;
              display: inline-block;
              border-radius: 20px;
              margin-left: 10px;
            }
            .high {
              display: inline;
              margin-left: 10px;
              color: #00aaff;
              font-size: 15px;
            }
          }
          .iconf {
            margin-top: 10px;
            .iconfont {
              color: #a0a0a0;
              margin-right: 5px;
            }
            .iconfo {
              color: #00aaff;
            }
          }
        }
      }
      .balance-center {
        height: 110px;
        width: 450px;
        padding: 30px 30px;
        border-bottom: 2px solid #fafafa;
        box-sizing: border-box;
        .apply {
          display: flex;
          .apply-carry {
            height: 30px;
            width: 160px;
            line-height: 30px;
            color: #fff;
            font-size: 14px;
            background-color: #00aaff;
            cursor: pointer;
            border-radius: 20px;
            margin-top: 10px;
            margin-right: 55px;
            text-align: center;
          }
          .account {
            .balance {
              font-size: 17px;
              color: #737373;
            }
            .number {
              font-size: 25px;
              color: #000;
            }
            .element {
              font-size: 14px;
              color: #737373;
              margin-left: 5px;
            }
          }
        }
      }
      .balance-bottom {
        height: 290px;
        padding: 70px 25px 30px 40px;
        box-sizing: border-box;
        .img-title {
          width: 171px;
          display: inline-block;
          margin-right: 20px;
          .img-icon {
            width: 170px;
            height: 120px;
            margin-bottom: 10px;
            background-color: #f4f4f4;
            text-align: center;
            line-height: 120px;
            .icon {
              font-size: 50px;
              color: #00aaff;
            }
          }
          .id {
            font-size: 13px;
            color: #94a5bc;
            margin-left: 20px;
          }
          .uncertified {
            font-size: 13px;
            color: red;
          }
        }
      }
    }
    .upload {
      display: flex;
      // background-color: #a0a0a0;
      .answers {
        width: 355px;
        height: 265px;
        background-color: #fff;
        box-sizing: border-box;
        padding: 35px 10px 0 50px;
        margin-left: 20px;
        border-radius: 5px;
        .number {
          margin-top: 35px;
          margin-bottom: 30px;
          .san {
            font-size: 18px;
          }
        }
      }
    }
    .newest-student {
      float: right;
      width: 730px;
      height: 265px;
      border-radius: 5px;
      margin-top: 20px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 35px 0px 50px 50px;
      .student-time {
        display: inline-block;
        display: flex;
        justify-content: space-between;
        .new-student {
          color: #a0a0a0;
          margin-right: 48px;
        }
      }
      .student-img {
        display: inline-block;
        .student-src {
          width: 88px;
          height: 88px;
          margin: 40px 48px 20px 0px;
        }
        .student-name {
          margin-left: 20px;
          color: #a0a0a0;
        }
      }
    }
  }
}
</style>
