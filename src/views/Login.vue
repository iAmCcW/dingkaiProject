<template>
<div class="login">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="登录/注册" name="first"></el-tab-pane>
  </el-tabs>
  <login />
</div>
</template>
<script>
import Login1 from '../components/Login1'
export default {
  name: 'login',
  components: {
    Login1
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
