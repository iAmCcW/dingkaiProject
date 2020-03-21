<template>
<div class="header">
  <!-- <el-dropdown>
  <el-button type="primary">
    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown> -->
</div>
</template>
<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      name: '1111111111111111111'
    }
  }
}
</script>
<style scoped lang="scss">
.header{
  height: 100%;
  width: 100%;
  .el-dropdown {
    float: left;
    margin-left: 270px;
    .el-button {
      padding: 10px 20px 10px 20px;  // 重置button的样式，去除本有的padding
      border-radius: 80px;
     background-color: white;
     color: #333;
        border: white;
      font-size: 20px;
      .avatar {
        width: 50px;
        height: 50px;
        margin-right: 6px;
        border-radius: 40px;
        vertical-align: middle
      }
    }
  }
}
</style>
