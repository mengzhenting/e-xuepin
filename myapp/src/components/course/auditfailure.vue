<template>
  <div>
    <mycourse></mycourse>
    <Classcom></Classcom>
    <div class="all">
      <div class="single" v-for="item in list" :key="item.id">
        <div class="sidebar">
          <img :src="item.url" alt />
          <div class="right">
            <p class="title">
              <span>{{item.title}}</span>
              <span class="color">{{item.active}}</span>
            </p>
            <p class="little">
              <span class="jiange">上传时间 :</span>
              <span>{{item.time}}</span>
            </p>
            <p class="price">{{item.reason}}</p>
          </div>
        </div>
        <div class="content">
          <div class="btn">修改课程</div>
          <p class="delete">删除课程</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          url: require('../../assets/picture.png'),
          title: '显露你的实力-面试',
          time: '3月23日 14:52',
          reason: '失败原因:内容包含反动性质,请修改'
        },
        {
          id: 2,
          url: require('../../assets/picture1.png'),
          title: '显露你的实力-面试',
          time: '3月23日 14:52',
          reason: '失败原因:内容包含反动性质,请修改'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.all {
  background-color: #fff;
  height: 480px;
  width: 900px;
  float: right;
  .single {
    .right {
      margin-left: 20px;
      line-height: 38px;
    }
    .title {
      .big {
        font-size: 22px;
      }

      .bottom {
        vertical-align: -2px;
      }
      .color {
        color: #0af;
      }
      font-size: 18px;
    }
    .jiange {
      padding-right: 10px;
    }
    .little {
      color: #a7a7a7;
      font-size: 14px;
    }
    .price {
      color: #0af;
      font-size: 18px;
    }
    line-height: 30px;
    padding-left: 32px;
    padding-top: 46px;
    padding-bottom: 38px;
    padding-right: 44px;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #f4f4f4;
  }

  .sidebar {
    display: flex;
  }
  .content {
    .delete {
      font-size: 14px;
      color: #a7a7a7;
    }
    text-align: center;
  }
  .btn {
    margin-bottom: 2px;
    margin-top: 28px;
    text-align: center;
    color: #0af;
    width: 160px;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #f5f5f5;
    border-radius: 20px;
  }
  .single:first-child {
    border-top-width: 0;
  }
}
</style>
