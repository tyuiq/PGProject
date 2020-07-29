<template>
  <div class="el-conten">
    <div class="el-top">
      <el-button type="primary" size="small" @click="addList()">新增</el-button>
    </div>
    <div class="el-line">
      <el-divider content-position="left">
        <span class="bg-fz">心理测评</span>
      </el-divider>
    </div>
    <div class="el-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址">
          <template slot-scope="scope">
            <div>{{scope.row.address}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="detailsList(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="editList()">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    addList() {
      this.$router.push({path: "/encyclopediasdetail/add"})
    },
    detailsList() {
      this.$router.push({path: "/encyclopediasdetail/details"})
    },
    editList() {
      this.$router.push({path: "/encyclopediasdetail/edit"})
    }
  }
};
</script>

<style scoped>
.el-top {
  width: 100%;
  height: 20px;
  /* border: 1px solid #000; */
  margin-right: 20px;
  padding-top: 10px;
}
.el-top button {
  float: right;
  margin-right: 5%;
}
.el-line {
  width: 90%;
  margin: 0 auto;
}
.el-table {
  min-width: 500px;
  max-width: 1100px;
  margin: 20px auto;
}
</style>