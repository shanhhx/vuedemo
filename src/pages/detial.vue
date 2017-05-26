<template>
<div class="detial-warp">
  <div class="detial-left">
    <div class="detial-left-img">
      <img :src="this.products[0].icon">
    </div>
    <ul>
      <router-link  class="detial-li" v-for="item in products" :to="{  path :  item.path }" :key="item.id" tag="li" >
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
        '/detail/count': require('../assets/images/car.png'),
        '/detail/forecast': require('../assets/images/earth.png'),
        '/detail/analysis': require('../assets/images/hill.png'),
        '/detail/publish': require('../assets/images/loud.png')
      }
    }
  },
  computed: {
    productIcon () {
      return this.imgMap()
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
    }
    .detial-li{
      width: 200px;
      height: 30px;
      text-align: center;
    }
  }
  .detial-right{
    width: 900px;
    float: left;
  }
}
</style>
