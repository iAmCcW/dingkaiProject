<template>
  <div class="register">
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="会员注册" name="zhuce"></el-tab-pane>
  </el-tabs>
    <regis/>
  </div>
</template>
<script>
import Regis from '@/components/Regis'
export default {
  name: 'register',
  data () {
    return {
      activeName: 'zhuce'
    }
  },
  components: {
    Regis
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
