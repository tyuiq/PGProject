<template>
  <div class="det-frame">
    <div v-if="pageState === 'add'" class="det-add">
      <el-form
        :model="formData"
        ref="formData"
        label-width="100px"
        class="demo-ruleForm"
        size="small "
      >
        <el-form-item label="通知名称" prop="name">
          <el-input v-model="formData.title" placeholder="请输入通知名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="通知内容" prop="content">
          <el-input
            type="textarea"
            v-model="formData.content"
            placeholder="请输入通知内容"
            class="input-inner"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div v-if="pageState === 'details'">
      <div class="bg-word">
        <h2>{{ dataList.title }}</h2>
        <p style="margin-top: 20px;margin-bottom: 60px;">{{ dataList.content }}</p>
      </div>
    </div>

    <div v-if="pageState === 'edit'">
        <el-form
        :model="dataList"
        ref="dataList"
        label-width="100px"
        class="demo-ruleForm"
        size="small "
      >
        <el-form-item label="通知名称" prop="title">
          <el-input v-model="dataList.title" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="通知内容" prop="content">
          <el-input
            type="textarea"
            v-model="dataList.content"
            placeholder="请输入通知内容"
            class="input-inner"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dataList')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from "../../../api/noticeUrl"
export default {
  data() {
    return {
      formData: {
        title: "",
        content: ""
      },
      dataList: {
        title: "",
        content: ""
      }
    };
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
  computed: {
    pageState() {
      return this.$route.params.type;
    }
  },
  methods: {
    submitForm(formName) {
      if (this.pageState === "edit") {
        this.$refs[formName].validate(valid => {
          if (valid) {
            api.putObj(this.$route.params.id, this.dataList).then(res => {
              if (res.data.errno === 0) {
                this.$message({
                  message: "更新成功",
                  type: "success"
                });
                this.$router.go(-1);
              }
            });
          } else {
            this.$message.error('更新失败');
            return false;
          }
        });
      } else {
        this.$refs[formName].validate(valid => {
          if (valid) {
            api.addObj(this.formData).then(res => {
              console.log(res);
              if (res.data.errno === 0) {
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
                this.$router.go(-1);
              }
            });
          } else {
            this.$message.error('添加失败');
            return false;
          }
        });
      }
    },
    getDetail(id) {
      if (this.pageState !== "add") {
        api
          .getObj(id)
          .then(res => {
            this.dataList = res.data.data;
          })
          .catch(err => [alert(err)]);
      }
    }
  }
};
</script>

<style scoped>
.det-frame {
  width: 800px;
  height: 100%;
  /* border: 1px solid #000; */
  padding: 50px 60px;
}
.input-inner {
  width: 400px;
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