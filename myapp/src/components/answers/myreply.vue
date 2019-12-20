<template>
  <div>
    <answersLeft></answersLeft>
    <div class="wrapper">
      <question></question>
      <div class="content">
        <div class="single-question" v-for="item in result" :key="item.id">
          <div>
            <p class="title">{{item.title}}</p>
            <p class="daan">{{item.daan}}</p>
            <p class="ling">
              <span class="time">提问时间:</span>
              <span>{{item.time}}</span>
              <span class="anser">回答:</span>
              <span class="fenge">{{item.reply}}</span>
              <span class="fenge">|</span>
              <span class="fenge">{{item.see}}</span>
              <span>人看过</span>
              <span class="who">提问者:</span>
              <span class="fenge">{{item.roles}}</span>
            </p>
          </div>
          <div class="setting">查看并处理</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import question from '../answers/question'
import answersLeft from '../answers/answersLeft'
export default {
  data() {
    return {
      result: [
        {
          id: 1,
          title: '中午在凡哥打客服电话退货了,下午可以到吗?我在北京',
          time: '3月23日 08:06',
          reply: 0,
          see: 91,
          roles: '流浪猫',
          daan:
            '是否落在鲜花上的尘埃一定比落在地上的尘埃显得高贵，而落在地上的尘埃一定比落在鲜花上的尘埃卑微那？'
        },
        {
          id: 2,
          title: '中午在凡哥打客服电话退货了,下午可以到吗?我在北京',
          time: '3月23日 08:06',
          reply: 0,
          see: 91,
          roles: '流浪猫',
          daan:
            '是否落在鲜花上的尘埃一定比落在地上的尘埃显得高贵，而落在地上的尘埃一定比落在鲜花上的尘埃卑微那？'
        }
      ]
    }
  },
  components: {
    question,
    answersLeft
  },
  mounted() {}
}
</script>
<style lang="less" scoped>
.wrapper {
  float: right;
  width: 900px;
  height: 586px;
  background-color: #fff;
}
.content {
  border-radius: 5px;
  margin-top: 1px;
  width: 100%;
  background-color: #fff;
  .single-question {
    .title {
      width: 588px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 14px;
    }
    .daan {
      position: relative;
      margin-bottom: 10px;
      border-radius: 10px;
      font-size: 14px;
      color: #c2c2c2;
      box-sizing: border-box;
      padding: 15px 20px;
      width: 632px;
      background-color: #f8f8f8;
    }
    .daan::after {
      position: absolute;
      content: '';
      width: 0px;
      height: 0px;
      border: 8px solid transparent;
      border-bottom-color: #f8f8f8;
      left: 12px;
      top: -15px;
    }
    .ling {
      .who {
        padding-left: 30px;
      }
      .fenge {
        padding: 0 5px;
      }
      font-size: 14px;
      color: #ccc;
    }
    .anser {
      margin-left: 34px;
    }
    .time {
      margin-right: 6px;
    }
    .setting {
      cursor: pointer;
      color: #00aaff;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #ccc;
      width: 160px;
      height: 30px;
      line-height: 30px;
      border-radius: 50px;
    }
    padding-left: 30px;
    padding-right: 40px;
    padding-top: 52px;
    padding-bottom: 36px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f4f4f4;
  }
}
</style>
