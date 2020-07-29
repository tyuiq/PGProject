<template>
  <el-row>
    <el-col :span="22" :offset="1" style="margin-top:30px;">
      <div class="bg-word">
        <h4>{{ data.title }}</h4>
        <div class="bg-time">{{getFormatDate(data.createtime)}}</div>
        <div class="bg-pb">
          <p>{{ data.content }}</p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import biakeapi from "../../api/baikeUrl";
import noticeapi from "../../api/noticeUrl";
export default {
  data() {
    return {
      data: ""
    };
  },
  mounted() {
    this.getDetail(this.$route.params.type, this.$route.params.id);
  },
  methods: {
    getDetail(type, id) {
      if (type === "baike") {
        biakeapi.getObj(id).then(res => {
          this.data = res.data.data;
          // console.log(this.data)
        });
      }else if (type === "notice") {
        noticeapi.getObj(id).then(res => {
          this.data = res.data.data;
          // console.log(this.data)
        });
      }
    },
    getFormatDate(dt) {
      // 将时间戳转换为日期
      const now = new Date(dt);
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      var date = now.getDate(); //返回日期月份中的天数（1到31）
      var hour = now.getHours(); //返回日期中的小时数（0到23）
      var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
      var second = now.getSeconds(); //返回日期中的秒数（0到59）
      month = month > 9 ? month : "0" + month;
      minute = minute > 9 ? minute : "0" + minute;
      return (
        year +
        "年" +
        month +
        "月" +
        date +
        "日" +
        "  " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    }
  }
};
</script>

<style scoped>
.bg-word h4 {
  text-align: center;
}
.bg-time {
  text-align: center;
  font-size: 10pt;
}
.bg-pb p {
  line-height: 23px;
  text-indent: 2em;
  font-size: 14px;
}
</style>