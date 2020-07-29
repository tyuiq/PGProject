<template>
  <el-container class="mp-cont">
    <el-header class="mp-header">
      <div class="mp-top">
        <h1 class="mp-tite">心理辅导中心</h1>
        <img src="../../assets/uu.png" alt="touxiang" />
        <div class="mp-name">王老师</div>
        <div class="mp-tc" @click="out()">退出</div>
      </div>
    </el-header>
    <el-main>
      <div class="mp-main">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">心理百科</el-menu-item>
          <el-menu-item index="2">通知</el-menu-item>
          <!-- <el-menu-item index="3">心理测评</el-menu-item> -->
          <el-menu-item index="4">咨询老师</el-menu-item>
        </el-menu>
        <div class="mp-content">
          <router-view></router-view>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key) {
      if (key === "1") {
        this.$router.push({ path: "/encyclopediaslist" });
      } else if (key === "2") {
        this.$router.push({ path: "/noticelist" });
      } else if (key === "3") {
        this.$router.push({ path: "/evaluationlist" });
      } else if (key === "4") {
        this.$router.push({ path: "/teacherslist" });
      }
    },
    out(){
      this.$message({
        message: '退出成功',
        type: 'success'
      });
      this.$router.replace({path: '/login'})
    }
  }
};
</script>

<style scoped>
.mp-cont {
  background-color: #f0f1f3;
}
.mp-header {
  width: 100%;
  height: 100px;
  border: 1px solid #000;
  background: linear-gradient(135deg, #006eb1, #40a2c1);
}
.mp-top {
  display: flex;
  justify-content: flex-end;
  /* -webkit-box-align: center; */
  align-items: center;
  margin-top: 10px;
  margin-right: 30px;
}
.mp-tite {
  margin: 6px auto;
  font-family: 华文行楷;
  /* font-weight: bolder; */
  letter-spacing: 20px;
  color: rgb(75, 62, 95);
}
.mp-name {
  font-size: 14px;
  color: #fff;
}
.mp-tc{
  font-size: 12px;
  color: #f0f1f3;
  margin-left: 12px;
}
.mp-top img {
  width: 30px;
  height: 30px;
  border: 1px solid skyblue;
  border-radius: 50%;
  margin-right: 10px;
}
.mp-main {
  width: 100%;
  /* height: 500px; */
}
.mp-content {
  height: 100%;
  width: 100%;
  /* border: 1px solid #000; */
  background-color: #fff;
}
</style>>