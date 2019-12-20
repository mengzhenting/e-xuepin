<template>
  <div>
    <answersLeft></answersLeft>
    <div class="wrapper">
      <question></question>
      <div class="content">
        <div class="single-question" v-for="item in result" :key="item.id">
          <div>
            <p class="title">{{item.title}}</p>
            <p class="ling">
              <span class="time">提问时间:</span>
              <span>{{item.time}}</span>
              <span class="anser">回答:</span>
              <span class="fenge">{{item.reply}}</span>
              <span class="fenge">|</span>
              <span class="fenge">{{item.see}}</span>
              <span>人看过</span>
              <span class="fenge">{{item.roles}}</span>
            </p>
          </div>
          <div class="setting">{{item.problem}}</div>
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
          problem: '查看并处理'
        },
        {
          id: 2,
          title: '中午在凡哥打客服电话退货了,下午可以到吗?我在北京',
          time: '3月23日 08:06',
          reply: 0,
          see: 91,
          problem: '删除问题'
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
