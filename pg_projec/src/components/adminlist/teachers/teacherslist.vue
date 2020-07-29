<template>
  <div class="el-conten">
    <div class="el-top">
      <el-button type="primary" size="small" @click="addList()">新增</el-button>
    </div>
    <div class="el-line">
      <el-divider content-position="left">
        <span class="bg-fz">咨询老师</span>
      </el-divider>
    </div>
    <div class="el-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址">
          <template slot-scope="scope">
            <div>{{maxSlice(scope.row.address)}}</div>
          </template>
        </el-table-column>
        
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="detailsList(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="editList()">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="el-fy">
        <el-pagination background layout="total, prev, pager, next" :total="6"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2019-05-02",
          name: "王老师",
          address: "北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师"
        },
        {
          date: "2019-05-04",
          name: "陈老师",
          address: "北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师，"
        },
        {
          date: "2019-05-01",
          name: "李老师",
          address: "北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师，"
        },
        {
          date: "2019-05-03",
          name: "刘老师",
          address: "北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师，"
        },
        {
          date: "2019-05-03",
          name: "龙老师",
          address: "北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师，"
        },
        {
          date: "2019-05-03",
          name: "向老师",
          address: "北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师，"
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
    },
    maxSlice(v){ // 控制字符串显示长度
      return v.length > 19 ? v.slice(0, 14) + '...' : v;
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
  min-width: 300px;
  max-width: 900px;
  margin: 20px auto;
}
.el-fy {
  width: 100%;
  height: 50px;
  text-align: center;
}
.el-fy .el-pagination {
  width: 500px;
}
</style>