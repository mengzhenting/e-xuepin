<template>
  <div>
    <mycourse></mycourse>
    <Classcom></Classcom>
    <div class="all">
      <div class="single" v-for="item in list" :key="item.id">
        <img :src="item.url" alt />
        <div class="right">
          <p class="title">
            <span>{{item.title}}</span>
            <span class="color big" :class="item.icon1"></span>
            <span class="color">{{item.active}}</span>
            <span class="color big bottom" :class="item.icon2"></span>
          </p>
          <p class="little">
            <span class="jiange">上传时间 :</span>
            <span>{{item.time}}</span>
          </p>
          <p class="small">
            <span class="num" :class="item.num"></span>
            <span class="icon">{{item.people}}</span>
            <span>位学员</span>
            <span class="xiao" :class="item.talkicon"></span>
            <span>{{item.talk}}</span>
            <span>条评论</span>
          </p>
          <p class="price">{{item.price}}</p>
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
          icon1: 'iconfont icon-kuohao-zuo',
          icon2: 'iconfont icon-kuohao-you',
          active: '进行中',
          time: '3月23日 14:52',
          people: '128',
          talk: '18',
          num: 'iconfont icon-touxiang',
          talkicon: 'iconfont icon-icon-test-copy',
          price: '免费'
        },
        {
          id: 2,
          url: require('../../assets/picture1.png'),
          title: '显露你的实力-面试',
          icon1: 'iconfont icon-kuohao-zuo',
          icon2: 'iconfont icon-kuohao-you',
          active: '已结束',
          time: '3月23日 14:52',
          people: '128',
          talk: '18',
          talkicon: 'iconfont icon-icon-test-copy',
          num: 'iconfont icon-touxiang',
          price: '¥199'
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
    .small {
      .icon {
        margin-left: -6px;
      }
      .num {
        margin-right: 5px;
      }
      .xiao {
        padding-left: 10px;
        color: #a7a7a7;
      }
      font-size: 13px;
      color: #a7a7a7;
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
    display: flex;
    border-top: 2px solid #f4f4f4;
  }
}
.single:first-child {
  border-top-width: 0;
}
</style>
