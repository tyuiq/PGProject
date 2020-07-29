<template>
  <el-container>
    <el-header style="height: 100%;margin:0 auto;">
      <div class="img_size">
        <img src="../../assets/fm.jpg" alt="img" />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#409EFF"
        text-color="#fff"
      >
        <el-menu-item index="1">网站首页</el-menu-item>
        <el-menu-item index="2">心理测评</el-menu-item>
        <el-menu-item index="3">心理咨询</el-menu-item>
        <el-menu-item index="4">心理自助</el-menu-item>
        <el-menu-item index="5" class="stya">
          <a href="https://open.163.com/cuvocw/" target="_blank">心理课程</a>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="bd-main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      activeIndex: '1'
    };
  },
  created() {
    // 页面加载时读取 sessionStorage 里的状态信息 ( 替换原 state  )
    if (sessionStorage.getItem("activeIndex")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("activeIndex"))
        )
      );
    }
    this.activeIndex = this.$store.state.active.activeIndex;
    console.log(this.$store.state)

    // 页面刷新时将 state 数据存储到 sessionStorage 中
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("activeIndex", JSON.stringify(this.$store.state));
    });
  },
  mounted() {
    this.getlist();
    this.handleSelect(this.activeIndex)
  },
  methods: {
    handleSelect(key) {
      this.changeIndex(key);
      this.getlist();
      if (key === "1") {
        this.$router.push({ path: "/pagecontent" });
      } else if (key === "2") {
        this.$router.push({ path: "/evaluation" });
      } else if (key === "3") {
        this.$router.push({ path: "/consultation" });
      } else if (key === "4") {
        this.$router.push({ path: "/selfhelp" });
      }
    },
    changeIndex(key) {
      this.$store.commit("SET_ACTIVEINDEX", key);
    },
    getlist() {
      console.log(this.$store.state.active.activeIndex);
      console.log(this.activeIndex);
    }
  }
};
</script>

<style>
.bd-main {
  height: 100%;
  width: 1110px;
  margin: 0 auto;
  /* background-color:#F3F3F3; */
  box-shadow: 0 0 9px 3px #d4d4d4;
}
.img_size {
  width: 1110px;
  /* display: table-cell;
  vertical-align: middle; */
  /* text-align: center; */
  /* border: 5px solid #1c86ee; */
  font-size: 0;
  /* margin-left: -20px; */
}
.img_size img {
  width: 1110px;
}

.navigation ul {
  display: flex;
  justify-content: center;
  margin: 0;
  color: #fff;
}
.navigation li {
  list-style-type: none;
  border-left: 1px solid #a9e165;
  padding: 13px 29px;
  line-height: 0.9em;
  font-size: 16px;
  background: #457b03;
}
.bd-footer {
  margin: 0 auto;
  width: 1110px;
}
.stya a {
  text-decoration:none;
}
</style>
