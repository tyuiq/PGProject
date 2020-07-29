<template>
  <div>
    <el-divider content-position="left">
      <span class="bg-fz">咨询老师简介</span>
    </el-divider>
    <div class="bg-word">
      <ul>
        <li @click="goFullView('1')">专职心理咨询师-刘老师</li>
        <li @click="goFullView('2')">专职心理咨询师-王老师</li>
        <li @click="goFullView()">专职心理咨询师-程老师</li>
        <li @click="goFullView()">专职心理咨询师-李老师</li>
        <li @click="goFullView()">专职心理咨询师-陈老师</li>
      </ul>
    </div>
    <p style="margin-bottom: 60px;"></p>
  </div>
</template>

<script>
export default {
  methods: {
    goFullView(id) {
      let opath = '/tearcherdetails/' + id;
      this.$router.push({ path: opath });
    },
  }
};
</script>

<style scoped>
.bg-fz {
  font-size: 18px;
}
.bg-word {
  padding: 1px 40px;
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