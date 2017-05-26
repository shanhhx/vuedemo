<template>
<div class="login-form">
  <div class="form-group">
    <div class="form-lable">
      账号
    </div>
    <div class="form-text">
      <input v-model="myusername" type="text">
      <span>{{ userErrors.errorText }}</span>
    </div>
  </div>
  <div class="form-group">
    <div class="form-lable">
      密码
    </div>
    <div class="form-text">
      <input v-model="mypassword" type="password">
      <span>{{ passwordErrors.errorText }}</span>
    </div>
  </div>
  <div class="form-group">
   <div class="btn" @click="onLogin">登陆</div>
  </div>
 <div>

 </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      mypassword: '',
      myusername: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/@/g.test(this.myusername)) {
        status = false
        errorText = '不包含@'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.mypassword)) {
        status = false
        errorText = '密码不是1-6位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        alert('登陆失败')
      } else {
        this.$http.get('http://localhost:8081/api/login')
          .then((res) => {
            this.$emit('has-log', res.data)
          }, (err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  .form-group{
    width: 80%;
    margin-left: 20px;
    overflow: hidden;
    .form-lable{
      float: left;
    }
    .form-text{
      float: left;
      margin-left: 10px;
      input{
        border: 1px solid #000;
      }
      span{
        color: red;
      }
    }
    .btn{
      width: 60px;
      margin: 0 15%;
      height: 20px;
      border: 1px solid #ccc;
      background: #7e8c8d;
      text-align: center;
      line-height: 20px;
    }
  }
</style>
