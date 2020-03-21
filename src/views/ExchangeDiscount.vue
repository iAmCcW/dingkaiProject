<template>
  <div class="exchangediscount">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="兑换折扣" name="first">
      </el-tab-pane>
  </el-tabs>
    <discount/>
  </div>
</template>
<script>
import Discount from '@/components/Discount'
export default {
  name: 'exchangediscount',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    Discount
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
