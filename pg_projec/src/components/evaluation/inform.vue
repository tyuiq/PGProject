<template>
  <div>
    <el-divider content-position="left">
      <span class="bg-fz">心理测评</span>
    </el-divider>
    <div class="bg-word">
      <h2>告知</h2>
      <p style="margin-top: 20px;">
          新生心理普查测试是我校心理健康教育中心响应教育部、省教育厅的号召和要求，为新生们特别提供的一项服务。每年的心理普查一般集中在10月底开始进行，为期二到三周，在此时间段内每位新生可自行安排时间通过电脑或手机上网完成测试。
      </p>
      <p style="margin-bottom: 60px;">
          测试结束后，中心会对全体数据进行统计分析，形成一份可靠的、详实的、具有指导意义的普查报告。对于每位新生的测试结果，中心将严格保密，新生如果想要了解自己的测试结果，可与中心联系后获得反馈。
      </p>
    </div>
  </div>
</template>

<script>
// import api from '../../api/baikeUrl'
export default {
  data() {
    return {
      params: {
        limit: 10
      }
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
.bg-word h2 {
  text-align: center;
}
</style>