<template>
<div class="main">
  <div class="app-header">
    <div class="header-log">
      <router-link :to="{ path: '/'}">
        <img src="../assets/logo.png" alt="">
      </router-link>
    </div>
    <ul class="header-ul">
      <li>{{username}}</li>
      <li v-if="!username" @click="login">登陆</li>
      <li v-if="!username" @click="reg">注册</li>
      <li v-if="username">退出</li>
      <li @click="about">关于</li>
    </ul>
  </div>
  <div class="app-content">
    <router-view></router-view>
  </div>
  <div class="app-footer">footer</div>
  <my-dialog :isShow="isloginShow" @on-close="closeDialog('isloginShow')">
    <login-form @has-log="logsuccess"></login-form>
  </my-dialog>
  <my-dialog :isShow="isregShow" @on-close="closeDialog('isregShow')">
    <reg-form></reg-form>
  </my-dialog>
  <my-dialog :isShow="isaboutShow" @on-close="closeDialog('isaboutShow')">
    <p>about</p>
  </my-dialog>
</div>

</template>

<script>
import myDialog from '../components/base/dialog'
import loginForm from '../components/loginform'
import regForm from '../components/regform'
export default {
  data () {
    return {
      isloginShow: false,
      isregShow: false,
      isaboutShow: false,
      username: ''
    }
  },
  components: {

    myDialog, loginForm, regForm
  },
  methods: {
    login () {
      this.isloginShow = true
    },
    reg () {
      this.isregShow = true
    },
    about () {
      this.isaboutShow = true
    },
    closeDialog (err) {
      this[err] = false
    },
    logsuccess (data) {
      console.log(data)
      this.username = data.username
      this.closeDialog('isloginShow')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  /**
   * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
   * http://cssreset.com
   */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* custom */
  a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
  }

  li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
  }

  html, body {
    width: 100%;
  }

  body {
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
.app-header{
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
  .header-log{
    width: 90px;
    height: 90px;
    float: left;
    img{
      width: 50px;
      margin-top: 20px;
      margin-left: 20px;
    }
  }
  .header-ul{
    float: right;
    height: 90px;
    line-height: 90px;
    li{
      cursor: pointer;
      float: left;
      padding:0 10px;

    }
  }
}
.app-footer {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;

}
  .main{
    background: rgb(247, 246, 242)
  }
</style>
