<template>
  <div class="el-conten">
    <div class="el-top">
      <el-button type="primary" size="small" @click="addList()">新增</el-button>
    </div>
    <div class="el-line">
      <el-divider content-position="left">
        <span class="bg-fz">通知</span>
      </el-divider>
    </div>
    <div class="el-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="createtime" label="日期" width="180">
          <template slot-scope="scope">
            <div>{{getFormatDate(scope.row.createtime)}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="250">
          <template slot-scope="scope">
            <div>{{maxSlice(scope.row.title)}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="作者" width="180"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="detailsList(scope.row.id)">查看</el-button>
            <el-button type="text" size="small" @click="editList(scope.row.id)">编辑</el-button>
            <el-button type="text" size="small" @click="delList(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="el-fy">
        <el-pagination background layout="total, prev, pager, next" :total="5"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../../api/noticeUrl"
export default {
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    addList(id) {id
      this.$router.push({ path: "/noticedetail/add/" + id });
    },
    detailsList(id) {
      this.$router.push({ path: "/noticedetail/details/" + id });
    },
    editList(id) {
      this.$router.push({ path: "/noticedetail/edit/" + id });
    },
    getList() {
      api
        .fetchList(this.params)
        .then(res => {
          this.tableData = res.data.data;
          console.log(this.tableData);
        })
        .catch(err => [alert(err)]);
    },
    getFormatDate(dt) {
      // 将时间戳转换为日期
      const now = new Date(dt);
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      var date = now.getDate(); //返回日期月份中的天数（1到31）
      month = month > 9 ? month : "0" + month;
      return year + "-" + month + "-" + date;
    },
    delList(id) {
      api.DelObj(id).then(res => {
        console.log(res.data);
        if (res.data.errno === 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getList();
        } else {
          this.$message.error("删除失败");
        }
      });
    },
    maxSlice(v){ // 控制字符串显示长度
      return v.length > 15 ? v.slice(0, 12) + '...' : v;
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