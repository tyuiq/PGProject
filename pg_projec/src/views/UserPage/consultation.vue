<template>
  <el-row :gutter="20" class="bg-row">
    <el-col :span="4" :offset="1" style="margin-top:40px;">
      <div class="bg-slogan">心理咨询</div>
      <el-menu class="el-menu-vertical-demo" @select="handleSelect">
        <!-- <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">心理咨询介绍</span>
        </el-menu-item>-->
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">心理咨询流程</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
          <span slot="title">咨询老师介绍</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">常见问题解答</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
export default {
  created() {
    widow.onbeforeunload = function (e) {
      this.$router.push({ paht: "/consultation" })
    }
  },
  methods: {
    handleSelect(key) {
      if (key === "1") {
        this.$router.push({ path: "/consultation/procedure" });
      } else if (key === "2") {
        this.$router.push({ path: "/consultation/teachers" });
      } else if (key === "3") {
        this.$router.push({ path: "/consultation/problem" });
      }
    }
  }
};
</script>

<style>
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
</style>