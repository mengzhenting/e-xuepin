<template>
  <div class="login">
    <Left></Left>
    <div class="pass-login clearBoth">
      <div class="verification clearBoth">
        <div class="verification-left">
          <div class="img">
            <div class="img-title" v-for="item in mag" :key="item.id">
              <img :src="item.img" alt />
              <span class="idd">{{item.idd}}</span>
              <span class="uncertified">{{item.uncertified}}</span>
            </div>
            <div class="real">
              <p class="real-id">{{real}}</p>
              <p class="real-condition">{{condition}}</p>
            </div>
          </div>
          <div class="skill-img">
            <div class="img-title">
              <img src="../../assets/ren1.png" alt />
              <span class="ids">资质证明</span>
              <router-view
                class="uncertified"
                :certification="certification"
                :certified="certified"
              >【未认证】</router-view>
            </div>
            <div class="real">
              <p class="real-id">请上传真实的身份证信息（正反面）</p>
              <p class="real-condition">如：照片要四角对齐，如有模糊、太暗、有遮挡，则不予认证</p>
            </div>
          </div>
        </div>
        <div class="verification-right">
          <div class="introduction">
            <span class="personal">个人简介</span>
            <router-link to="/password/information/edit" class="edit">
              <span class="icon iconfont icon-bianji"></span>
              <span class="edit-text">编辑</span>
            </router-link>
          </div>
          <textarea class="edit-content" id cols="30" rows="10">涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕
            业于南方冶金学院(现江西理工大学)计算机系1996级。2004年，担
            任长沙人民广播电台星沙之声频道(FM105) 的主持
            人。2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆
            调查》。2010年,担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的
            嘎嘣观察员[1]。2011年， 主持浙江钱江频道电视新闻时评类节目
            《九点半》[2]。2012年， 主持了江西卫视新闻评论类节目《深度
            观察》[3]。2013年， 担任河北卫视情感谈话节目《情感大裁判》
            的主持人[4]。2014年，担任天津卫视职场招聘节目《非你莫属》
            的主持人[5] ;同年，在天津卫视情感综艺类节目《爱情保卫战》中
            担任情感导师[6]</textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      real: '请上传真实的身份证信息（正反面）',
      condition: '照片要四角对齐，如有模糊、反光、太暗、有遮挡，则不予认证',
      mag: [
        {
          id: 1,
          idd: '身份证 （正面）',
          uncertified: '【未认证】',
          img: require('../../assets/ren1.png')
        },
        {
          id: 2,
          idd: '身份证 （反面）',
          uncertified: '【未认证】',
          img: require('../../assets/ren1.png')
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.verification {
  width: 900px;
  height: 585px;
  background-color: #fff;
  float: left;
  .verification-left {
    width: 450px;
    height: 585px;
    float: left;
    border-right: 2px solid #f4f4f4;
    box-sizing: border-box;
    .img {
      height: 290px;
      padding: 50px 25px 30px 40px;
      box-sizing: border-box;
      border-bottom: 2px solid #f4f4f4;
      .img-title {
        width: 171px;
        display: inline-block;
        margin-right: 20px;
        img {
          width: 171px;
          height: 120px;
          margin-bottom: 10px;
        }
        .idd {
          font-size: 13px;
          color: #94a5bc;
        }
        .uncertified {
          font-size: 13px;
          color: red;
        }
      }
      .real {
        margin-top: 10px;

        .real-id {
          font-size: 13px;
          text-align: center;
          line-height: 30px;
          color: #ada9a9;
        }
        .real-condition {
          font-size: 13px;
          //   line-height: 10px;
          color: #bdbaba;
        }
      }
    }
    .skill-img {
      height: 290px;
      padding: 50px 25px 30px 40px;
      box-sizing: border-box;
      text-align: center;
      .img-title {
        width: 171px;
        display: inline-block;
        margin-right: 20px;
        img {
          width: 171px;
          height: 120px;
          margin-bottom: 10px;
        }
        .ids {
          font-size: 13px;
          color: #94a5bc;
        }
        .uncertified {
          font-size: 13px;
          color: red;
        }
      }
      .real {
        margin-top: 10px;

        .real-id {
          font-size: 13px;
          text-align: center;
          line-height: 30px;
          color: #999898;
        }
        .real-condition {
          font-size: 13px;
          //   line-height: 10px;
          color: #9e9b9b;
        }
      }
    }
  }
  .verification-right {
    width: 450px;
    height: 585px;
    float: right;
    padding: 50px 40px 30px 40px;
    box-sizing: border-box;

    .introduction {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      .personal {
        font-size: 16px;
        font-weight: bold;
      }
      .edit {
        color: #00aaff;
        text-decoration: none;
      }
      .icon {
        font-size: 20px;
        margin-right: 5px;
      }
    }
    .edit-content {
      outline: none;
      font-size: 13px;
      color: #8d8d8d;
      line-height: 22px;
      height: 370px;
      width: 360px;
      border-right: 5px;
      border: none;
      resize: none;
    }
  }
}
</style>
