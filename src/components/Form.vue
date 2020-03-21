<template>
<div class="duihuan" ><br/>
  &nbsp; 会员账号：
  <span class="first">kjkk001</span><br/><br/>
  会员级别：
   <span class="second">推广员</span><br/><br/>
<prepend>推荐链接：</prepend>
  <el-input
  size="mini"
     placeholder="请输入"
    v-model="input1">
  </el-input><br/><br/>
  <prepend >真实姓名：</prepend>
  <el-input
    size="mini"
    placeholder="请输入"
    v-model="input2">
  </el-input><br/><br/>
 <prepend>身份证号：</prepend>
  <el-input
    size="mini"
    placeholder="请输入"
    v-model="input3">
  </el-input><br/><br/><br/>
  <el-button type="primary">修改信息</el-button>
</div>
</template>
<script>
export default {
  data () {
    return {
      input1: 'http://www.kjkk.cn',
      input2: '凯',
      input3: '3702841996********'
    }
  }
}
</script>
<style lang='scss' scoped>
 .duihuan{
   width: 80%;
     float: right;
    margin-right: 50px;
    font-size: 15px;
    .first{
      color: red;
    }
    .second{
      color: red;
    }
 .el-input{
    float: right;
    font-size: 1px;
    width: 160px;
 }
 }
</style>
