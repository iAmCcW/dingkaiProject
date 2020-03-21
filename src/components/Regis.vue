<template>
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
  <el-form-item label="会员账号" prop="id">
    <el-input v-model="ruleForm.id"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="管理人" prop="administrator">
    <el-input v-model="ruleForm.administrator"></el-input>
  </el-form-item>
  <el-form-item label="真实姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="手机号码" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="开户银行" prop="bank">
    <el-select v-model="ruleForm.bank" placeholder="请选择开户行">
      <el-option label="中国银行" value="zhongguo"></el-option>
      <el-option label="农业银行" value="nongye"></el-option>
      <el-option label="建设银行" value="jianshe"></el-option>
      <el-option label="工商银行" value="gongshang"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="银行账号" prop="banknumb">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
   <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        id: '',
        pass: '',
        checkPass: '',
        administrator: '',
        name: '',
        phone: '',
        bank: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
        administrator: [
          {required: true, message: '请输入管理人', trigger: 'blur'}
        ],
        name: [
          {required: true, message: '请输入真实姓名', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        bank: [
          {required: true, message: '请选择开户行', trigger: 'change'}
        ],
        banknumb: [
          {required: true, message: '请输入银行卡号', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('创建成功!')
        } else {
          console.log('创建失败')
          return false
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
