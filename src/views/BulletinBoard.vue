<template>
  <div class="bulletinboard">
<el-tabs v-model="activeName"  @tab-click="handleClick">
    <el-tab-pane label="公告栏" name="first"></el-tab-pane>
  </el-tabs>
    <bboard/>
  </div>
</template>
<script>
import Bboard from '@/components/Bboard'
export default {
  name: 'bulletinBoard',
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    Bboard
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
