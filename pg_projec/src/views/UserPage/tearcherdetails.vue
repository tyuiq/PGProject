<template>
  <el-row>
    <el-col :span="22" :offset="1" style="margin-top:30px;">
      <div class="bg-word">
        <h4>专职心理咨询师-{{ namefull() }}</h4>
        <div class="bg-time">2019年07月01日 09:38 </div>
        <div class="bg-pb">
          <p>北京师范大学发展与教育心理学硕士；中国心理学会首批注册心理师，国家二级心理咨询师，河南省心理咨询师职业资格评审专家。
              专业从事心理学教育、教学、咨询和研究工作，擅长青少年成长心理咨询、亲子关系\婚姻家庭心理咨询、团体心理辅导与咨询等。
          </p>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      data: ""
    };
  },
  methods: {
      namefull() {
          if(this.$route.params.id === '1'){
              return '刘老师'
          }else if(this.$route.params.id === '2'){
              return '王老师'
          }else {
              return '李老师'
          }
      }
  }
};
</script>

<style scoped>
.bg-word h4 {
  text-align: center;
}
.bg-time {
  text-align: center;
  font-size: 10pt;
}
.bg-pb p {
  line-height: 23px;
  text-indent: 2em;
  font-size: 14px;
}
</style>