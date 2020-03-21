<template>
<div class="form-view">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="会员信息" name="first"></el-tab-pane>
  </el-tabs>
  <my-form />
</div>
</template>
<script>
import MyForm from '../components/Form'
export default {
  name: 'FormView',
  components: {
    MyForm
  }
}
</script>
<style scoped lang="scss">
.form-view {
  width: 500px;
  margin: 0 auto;
}
@media screen and (max-width: 500px) {
  .form-view {
    width: 300px;
    margin: 0 auto;
  }
}
</style>
