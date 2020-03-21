<template>
  <el-table
    :data="tableData"
    border
    style="width: 100% " >
    <el-table-column
      prop="numb"
      label="序号"
      width="70">
    </el-table-column>
    <el-table-column
      prop="id"
      label="会员ID"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="真实姓名"
      width="90">
    </el-table-column>
     <el-table-column
      prop="sale1"
      label="工资"
      width="100">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        numb: '1',
        id: '***',
        name: '***',
        sale1: '1200'
      }, {
        numb: '2',
        id: '***',
        name: '***',
        sale1: '2456'
      }, {
        numb: '3',
        id: '***',
        name: '***',
        sale1: '2546'
      }, {
        numb: '4',
        id: '***',
        name: '***',
        sale1: '1235'
      }]
    }
  }
}
</script>
<style scoped lang="scss">
</style>
