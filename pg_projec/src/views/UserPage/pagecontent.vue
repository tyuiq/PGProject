<template>
  <el-row :gutter="20">
    <el-col :span="13" class="bg-ly bg-topColor1">
      <!-- <div class="bg-sty"></div> -->
      <div class="bg-box">
        <h3 class="bg-tit">心理百科</h3>
        <div class="bg-more" @click="encyclopediasList()">
          <img src="../../assets/gengduo.png" alt="更多" />
          <span>更多</span>
        </div>
      </div>
      <div class="bg-list bg-lw1">
        <ul>
          <li v-for="item in baiKeData" :key="item.id" @click="goFullView('baike', item.id)">{{item.title}}</li>
        </ul>
      </div>
    </el-col>
    <el-col :span="9" class="bg-ly bg-topColor2">
      <div class="bg-box">
        <h3 class="bg-tit">通知</h3>
        <div class="bg-more" @click="noticeList()">
          <img src="../../assets/gengduo.png" alt="更多" />
          <span>更多</span>
        </div>
      </div>

      <div class="bg-list bg-lw2">
        <ul>
          <li v-for="item in noticeData" :key="item.id" @click="goFullView('notice', item.id)">
            {{maxSlice(item.title)}}
          </li>
        </ul>
      </div>
    </el-col>
    <el-col :span="9" class="bg-ly bg-uad bg-topColor3">
      <img src="../../assets/tb.png" alt="tb" />
    </el-col>
  </el-row>
</template>

<script>
import biakeapi from "../../api/baikeUrl";
import noticeapi from "../../api/noticeUrl";
export default {
  data() {
    return {
      baiKeData: "",
      noticeData: "",
      params: {
        limit: 10
      }
    };
  },
  mounted() {
    this.getBikeList();
    this.getNoticeList();
  },
  methods: {
    encyclopediasList() {
      // 跳转到心理百科页面路由
      this.$router.push({ path: "/encyclopedias" });
    },
    noticeList() {
      // 跳转到通知页面路由
      this.$router.push({ path: "/notice" });
    },
    getBikeList() {
      biakeapi
        .fetchList(this.params)
        .then(res => {
          this.baiKeData = res.data.data;
          console.log(this.baiKeData);
        })
        .catch(err => [alert(err)]);
    },
    getNoticeList() {
      noticeapi
        .fetchList(this.params)
        .then(res => {
          this.noticeData = res.data.data.slice(0,4);
          console.log(this.noticeData);
        })
        .catch(err => [alert(err)]);
    },
    goFullView(type, id) {
      let opath = "/eydetails/"+ type + "/" + id;
      this.$router.push({ path: opath });
    },
    maxSlice(v){ // 控制字符串显示长度
      return v.length > 18 ? v.slice(0, 18) + '...' : v;
    }
  }
};
</script>

<style scoped>
.bg-box {
  display: inline-block;
  width: 100%;
  height: 50px;
}
.bg-tit {
  /* margin-top:20px; */
  margin-left: 20px;
  font-family: 微软雅黑;
  /* line-height: 1.5em; */
  float: left;
}
.bg-more {
  float: right;
  margin-right: 20px;
}
.bg-more img {
  width: 16px;
  margin-top: 26px;
  margin-bottom: -3px;
}
.bg-more span {
  margin-left: 8px;
  font-size: 14px;
  color: #999999;
  font-family: 微软雅黑;
}
.bg-ly {
  border-radius: 4px;
  margin: 0 20px;
  padding: 10px 0;
}
.bg-uad {
  margin-bottom: 20px;
}
.bg-uad img {
  width: 100%;
}
.bg-topColor1 {
  border-top: 6px solid #0085e4;
  /* background: #fbf9f7; */
  background-color: #fbf9f7;
  box-shadow: 0 0 9px 3px #fbf9f7;
}
.bg-topColor2 {
  border-top: 6px solid #7dd0b6;
  /* background: #fbf9f7; */
  background-color: #fbf9f7;
  box-shadow: 0 0 9px 3px #f5f3f1;
}
.bg-topColor3 {
  border-top: 6px solid #eeb658;
  box-shadow: 0 0 9px 3px #fbf9f7;
  margin-top: 24px;
}
.bg-lw1 {
  width: 510px;
  height: 480px;
}
.bg-lw2 {
  width: 360px;
  height: 230px;
}
.bg-list li {
  list-style-type: none;
  line-height: 1em;
  padding: 15px 10px;
  border-bottom: 1px solid #ebeef5;
  /* border:1px solid #000; */
  font-size: 14px;
  font-family: 微软雅黑;
  color: #000;
}
</style>