<template>
<el-aside style="min-height: 100%; background-color: #545c64; overflow: hidden">
  <el-menu class="el-menu-vertical-demo" :default-openeds="['1','2']" router default-active="/CarouselTable" @open="handleOpen" @close="handleClose"
    background-color="#545c64" text-color="#fff" active-text-color="#409EFF">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span></span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/CarouselTable">首页</el-menu-item>
        <el-menu-item index="/BulletinBoard">公告栏</el-menu-item>
        <el-menu-item index="/Echarts">部门业绩图</el-menu-item>
        <el-menu-item index="/Membrank">会员排名</el-menu-item>
        <el-menu-item index="/Money">工资列表</el-menu-item>
        <el-menu-item index="/ExchangeDiscount">兑换折扣</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span></span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/FormView">会员中心</el-menu-item>
        <el-menu-item index="/Register">会员注册</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</el-aside>
</template>
<script>
export default {
  name: 'TheNav',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="scss">
</style>
