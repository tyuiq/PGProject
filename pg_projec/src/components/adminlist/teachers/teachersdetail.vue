<template>
  <div class="det-frame">
    <div v-if="pageState === 'add'" class="det-add">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="small "
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>

        <el-form-item label="活动形式" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            placeholder="请输入活动形式"
            class="input-inner"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="pageState === 'details'">
      <div class="bg-word">
        <h2>告知</h2>
        <p
          style="margin-top: 20px;"
        >新生心理普查测试是我校心理健康教育中心响应教育部、省教育厅的号召和要求，为新生们特别提供的一项服务。每年的心理普查一般集中在10月底开始进行，为期二到三周，在此时间段内每位新生可自行安排时间通过电脑或手机上网完成测试。</p>
        <p
          style="margin-bottom: 60px;"
        >测试结束后，中心会对全体数据进行统计分析，形成一份可靠的、详实的、具有指导意义的普查报告。对于每位新生的测试结果，中心将严格保密，新生如果想要了解自己的测试结果，可与中心联系后获得反馈。</p>
      </div>
    </div>
    <div v-if="pageState === 'edit'">
        <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="small "
      >
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入活动名称" class="input-inner"></el-input>
        </el-form-item>

        <el-form-item label="活动形式" prop="desc">
          <el-input
            type="textarea"
            v-model="ruleForm.desc"
            placeholder="请输入活动形式"
            class="input-inner"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        desc: ""
      }
    };
  },
  // mounted() {
  //     this.cssss()
  // },
  computed: {
    pageState() {
      return this.$route.params.type;
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
    //   cssss() {
    //       console.log(this.$route.params.type)
    //   }
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