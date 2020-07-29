<template>
  <el-row :gutter="20" class="bg-row">
    <el-col :span="4" :offset="1" style="margin-top:40px;">
      <div class="bg-slogan">通知</div>
    </el-col>
    <el-col :span="18">
      <div>
        <el-divider content-position="left">
          <span class="bg-fz">通知</span>
        </el-divider>
        <div class="bg-word">
          <ul>
            <li v-for="item in data" :key="item.id" @click="goFullView('notice', item.id)">
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import api from "../../api/noticeUrl";
export default {
  data() {
    return {
      data: "",
      params: {
        limit: 10
      }
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    goFullView(type, id) {
      let opath = '/eydetails/' + type + '/' + id;
      this.$router.push({ path: opath });
    },
    getList() {
      api.fetchList(this.params).then(res => {
        this.data = res.data.data
        console.log(this.data)
      })
      .catch(err => [
        alert(err)
      ])
    }
  }
};
</script>

<style scoped>
.bg-row {
  margin-top: 20px;
}
.bg-slogan {
  /* border: 1px solid #000; */
  font-size: 18px;
  line-height: 21px;
  padding: 12px 5px 12px 20px;
  margin-bottom: 16px;
  margin-top: -30px;
  background-color: #7dd0b6;
}
.bg-fz {
  font-size: 18px;
}
.bg-word {
  /* padding: 1px 40px; */
  line-height: 23px;
  text-indent: 2em;
  font-size: 14px;
}
.bg-word li {
  /* list-style-type: none; */
  line-height: 1em;
  padding: 13px 0;
  border-bottom: 1px solid #ebeef5;
  /* border:1px solid #000; */
}
.bg-word li a {
  text-decoration: none;
  font-size: 14px;
  font-family: 微软雅黑;
  color: #000;
}
</style>