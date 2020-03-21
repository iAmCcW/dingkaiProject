<template>
<div class="header">
  <el-dropdown>
     <el-button icon="el-icon-user-solid"/>
      {{name}}
  </el-dropdown>
</div>
</template>
<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      name: ''
    }
  }
}
</script>
<style scoped lang="scss">
</style>
