<template>
  <div class="money">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="工资明细" name="first"></el-tab-pane>
  </el-tabs>
    <moneytable/>
  </div>
</template>
<script>
import Moneytable from '@/components/Moneytable'
export default {
  name: 'money',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    Moneytable
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss">
</style>
