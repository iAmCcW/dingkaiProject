<template>
    <div>
        <el-table
    :data="tableData"
    border
    style="width: 100%"
    height="480">
    <el-table-column
      fixed
      prop="id"
      label="序号"
      width="70">
    </el-table-column>
    <el-table-column
      prop="text"
      label="内容"
      width="140">
    </el-table-column>
    <el-table-column
      prop="date"
      label="发布日期"
      width="130">
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        id: '1',
        text: '',
        date: '2020-03-08'
      }, {
        id: '2',
        text: '',
        date: '2020-03-09'
      }, {
        id: '3',
        text: '',
        date: '2020-03-10'
      }, {
        id: '4',
        text: '',
        date: '2020-03-11'
      }, {
        id: '5',
        text: '',
        date: '2020-03-12'
      }, {
        id: '6',
        text: '',
        date: '2020-03-13'
      }, {
        id: '7',
        text: '',
        date: '2020-03-14'
      }],
      tit: '哈哈哈哈哈',
    }
  },
  methods: {
    getAccountReports () {
      this.$get("ashx/usercenter/?action=info&UniqueUserID=100014941").then((res)=>{
        console.log(res);
      })
    }
  },
  created () {
    this.getAccountReports()
  }
}
</script>
<style lang='scss' scoped>
</style>
