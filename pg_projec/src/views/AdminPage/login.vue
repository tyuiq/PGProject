<template>
  <div class="size-wrapp">
    <div class="size-body">
      <el-form ref="form" :model="form" class="size-form">
        <div class="size-tit"><h4>心理辅导管理中心</h4></div>
        <el-form-item>
          <el-input v-model="form.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="medium" class="size-but">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from '../../api/login'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      api.userLogin(this.form).then(res => {
        console.log(res)
        if(res.data.errno === 0){
          // alert('登录成功')
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.$router.replace({ path: "/encyclopediaslist" })
        }else{
          this.$message.error('账号或密码错误，请重新输入');
          // alert('账号或密码错误，请重新输入')
        }
      })
      
    }
  }
};
</script>

<style scoped>
.size-wrapp {
  width: 100%;
  height: 400px;
  margin-top: 100px;
}
.size-body {
  width: 400px;
  height: 300px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  margin: 0 auto;
  box-shadow: 0 0 9px 3px #d4d4d4;
}
.size-form {
  width: 300px;
  margin: 60px auto;
}
.size-tit{
  text-align: center;
  margin-top: -24px;
  margin-bottom: 36px;

}
.size-but {
  width: 100%;
}
</style>