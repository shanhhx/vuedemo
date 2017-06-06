<template>
<div class="detial-warp">
  <div class="detial-left">
    <div class="detial-left-img">
      <img :src="productIcon">
    </div>
    <ul>
      <router-link  class="detial-li" v-for="item in products" :to="{  path : '/detial/' + item.path }" :key="item.id" tag="li" activeClass="active">
        {{ item.name }}</router-link>
    </ul>
  </div>
  <div class="detial-right">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: '数据统计',
          path: 'car',
          icon: require('../assets/images/car.png'),
          active: false
        },
        {
          name: '数据预测',
          path: 'loud',
          active: false
        },
        {
          name: '流量分析',
          path: 'hill',
          active: false
        },
        {
          name: '广告发布',
          path: 'earth',
          active: false
        }
      ],
      imgMap: {
        '/detial/car': require('../assets/images/car.png'),
        '/detial/earth': require('../assets/images/earth.png'),
        '/detial/hill': require('../assets/images/hill.png'),
        '/detial/loud': require('../assets/images/loud.png')
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
.detial-warp{
  width: 1200px;
  margin: 0 auto;
  .detial-left{
    width: 200px;
    float: left;
    padding: 30px 50px;
    .detial-left-img{
      width: 80px;
      height: 80px;
      margin: 0 0 10px 60px;
      img{
        width: 100%;
      }
    }
    .active{
      background: #ccc;
    }
    .detial-li{
      width: 200px;
      height: 30px;
      text-align: center;
      line-height: 30px;
    }
  }
  .detial-right{
    width: 900px;
    float: left;
    padding-top: 30px;
    .detial-right-top{
      padding: 20px;
      margin-bottom: 20px;
      background: #fff;
      h2{
        height: 20px;
        margin-bottom: 10px;
        line-height: 20px;
        font-size: 20px;
      }
      &>p{
        background: #cdcdcd;
        padding: 5px;
      }
      .section-group{
        .section-lable{
          float: left;
        }
        .section-main{
          float: left;
        }
      }
    }
    .detial-right-bottom{
      background: #fff;
      padding: 20px;
      margin-bottom: 20px;
      .sales-board-table {
        width: 100%;
        margin-top: 20px;
      }
      .sales-board-table th {
        background: #4fc08d;
        color: #fff;
      }
      .sales-board-table td {
        border: 1px solid #f0f2f5;
        padding: 15px;
      }
      p {
        line-height: 1.6;
      }
      h2 {
        font-size: 20px;
        padding-bottom: 15px;
      }
      h3 {
        font-size: 18px;
        font-weight: bold;
        padding: 20px 0 10px 0;
      }
      li {
        padding: 5px 0;
      }
    }

    }
  }

</style>
