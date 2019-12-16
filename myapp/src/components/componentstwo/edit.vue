<template>
  <div class="login">
    <Left></Left>
    <div class="pass-login clearBoth">
      <div class="verification clearBoth">
        <div class="verification-left">
          <div class="img">
            <div class="img-title">
              <img src="../../assets/ren2.png" alt />
              <span class="id">身份证 （正面）</span>
              <span class="uncertified">【认证中】</span>
            </div>
            <div class="img-title">
              <img src="../../assets/ren3.png" alt />
              <span class="id">身份证 （反面）</span>
              <span class="uncertified">【认证中】</span>
            </div>
            <div class="real">
              <p class="real-id">请上传真实的身份证信息（正反面）</p>
              <p class="real-condition">照片要四角对齐，如有模糊、反光、太暗、有遮挡，则不予认证</p>
            </div>
          </div>
          <div class="skill-img">
            <div class="img-title">
              <img src="../../assets/ren4.png" alt />
              <span class="id">资质证明</span>
              <span class="uncertified">【认证中】</span>
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
          </div>
          <textarea class="edit-content" cols="30" rows="10">涂磊，1977年6月10日出生于江西省南昌市，中国内地男主持人，毕
            业于南方冶金学院(现江西理工大学)计算机系1996级。2004年，担
            任长沙人民广播电台星沙之声频道(FM105) 的主持
            人。2006年，转战电视节目，随后主持了长沙晚间法律节目《方圆
            调查》。2010年,担任青海卫视新闻脱口秀节目《嘎嘣爆米花》的
            嘎嘣观察员[1]。2011年， 主持浙江钱江频道电视新闻时评类节目
            《九点半》[2]。2012年， 主持了江西卫视新闻评论类节目《深度
            观察》[3]。2013年， 担任河北卫视情感谈话节目《情感大裁判》
            的主持人[4]。</textarea>
          <div class="modify">
            <span class="confirm">确认修改</span>
            <router-link to="authentication" class="cancel">取消修改</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
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
        .id {
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
        .id {
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
      margin-bottom: 30px;
      .personal {
        font-size: 16px;
        font-weight: bold;
      }
    }
    .edit-content {
      padding: 20px 30px 10px 15px;
      box-sizing: border-box;
      font-size: 13px;
      color: #8d8d8d;
      line-height: 22px;
      height: 370px;
      width: 360px;
      border-right: 5px;
      box-shadow: 0px 2px 3px #000;
      resize: none;
      outline: none;
    }
    .modify {
      margin-top: 30px;
      text-align: center;
      .confirm {
        width: 160px;
        height: 45px;
        display: inline-block;
        background-color: #00aaff;
        border: 1px solid #8d8d8d;
        border-radius: 5px;
        margin-right: 20px;
        text-align: center;
        line-height: 45px;
        cursor: pointer;
        color: #fff;
      }
      .cancel {
        width: 160px;
        height: 45px;
        display: inline-block;
        border: 1px solid #8d8d8d;
        border-radius: 5px;
        text-align: center;
        line-height: 45px;
        cursor: pointer;
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
