<template>
<div class="duihuan" ><br/>
  兑换会员ID：
  <span class="first">dada</span><br/><br/>
   兑换会员级别:
   <span class="second">dada</span><br/><br/>
   属性方式：
  <el-input
    placeholder="请输入"
    v-model="input1">
  </el-input><br/><br/>
   识别号：
  <el-input
    placeholder="请输入"
    v-model="input2">
  </el-input><br/><br/>
   验证码：
  <el-input
    placeholder="请输入"
    v-model="input3">
  </el-input><br/><br/><br/>
  <el-button type="primary">兑换折扣</el-button>
</div>
</template>
<script>
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: ''
    }
  }
}
</script>
<style lang='scss' scoped>
 .duihuan{
     float: right;
    margin-right: 40px;
    font-size: 22px;
    .first{
      color: red;
    }
    .second{
      color: red;
    }
 .el-input{
    float: right;
    font-size: 1px;
    width: 120px;
 }
 }
</style>
