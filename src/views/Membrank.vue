<template>
  <div class="membrank" >
    <el-tabs  v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="月销售" name="first"  >
      <rank1/>
    </el-tab-pane>
    <el-tab-pane label="月综合" name="second">
      <rank2/>
    </el-tab-pane>
    <el-tab-pane label="年销售" name="third">
      <rank3/>
    </el-tab-pane>
    <el-tab-pane label="年综合" name="fourth">
      <rank4/>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import Rank1 from '@/components/Rank1'
import Rank2 from '@/components/Rank2'
import Rank3 from '@/components/Rank3'
import Rank4 from '@/components/Rank4'
export default {
  name: 'membrank',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    Rank1,
    Rank2,
    Rank3,
    Rank4
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }}
}
</script>
<style lang="scss">
</style>
