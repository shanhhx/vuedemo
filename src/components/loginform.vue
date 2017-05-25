<template>
<div class="login-form">
  <div class="form-group">
    <div class="form-lable">
      账号
    </div>
    <div class="form-text">
      <input v-model="myusername" type="text">
      <span>{{myusername}}</span>
    </div>
  </div>
  <div class="form-group">
    <div class="form-lable">
      密码
    </div>
    <div class="form-text">
      <input v-model="mypassword" type="password">
      <span>{{mypassword}}</span>
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
  methods: {
    onLogin () {
      console.log(this.mypassword, this.myusername)
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
