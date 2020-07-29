<template>
  <div>
    <el-divider content-position="left">
      <span class="bg-fz">心理自测</span>
    </el-divider>
    <div class="bg-word">
      <ul>
        <li @click="goFullView()">学习风格测试</li>
        <li>
          学习动机自我诊断测试
        </li>
        <li>
          自信心量表
        </li>
        <li>
          焦虑自评量表
        </li>
        <li>
          抑郁自评量表
        </li>
      </ul>
    </div>
    <p style="margin-bottom: 60px;"></p>
  </div>
</template>

<script>
export default {
  methods: {
    goFullView() {
      let opath = "/selfestsubject";
      this.$router.push({ path: opath });
    }
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
  font-size: 14px;
  font-family: 微软雅黑;
  color: #000;
}
</style>