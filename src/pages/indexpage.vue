<template>
<div class="index-page">
  <div class="index-page-left">
      <div class="index-page-left-box" >
        <h2>全部产品</h2>
          <div v-for="prodect in productList" class="left-box-item">
            <h3>{{prodect.title}}</h3>
            <ul>
              <li v-for="item in prodect.list"><a :href="item.url">{{item.name}}</a></li>
            </ul>
          </div>
      </div>
    <div class="index-page-left-box" >
      <h2>最新消息</h2>
      <div  class="left-box-item">
        <ul>
          <li v-for="news in newList"><a class="news-item" :href="news.url">{{news.title}}</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="index-page-right">
    <slide-show :slides="slides" :inv="inv" @onchange="dosomething"></slide-show>
    <div class="border-list">
      <div class="border-list-item" v-for="(borderItem, index) in boardList" :class="[{'line-last':index%2 !==0}]">
        <div class="border-item-inner"  :class="['index-bord-' + borderItem.id]">
          <h2>{{ borderItem.title }}</h2>
          <p>{{ borderItem.description }}</p>
          <div class="index-board-button">
            <router-link :to="{path: '/detial/' + borderItem.id}" class="button">立即购买</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  created () {
    this.$http.get('http://localhost:8081/api/getNewsList')
    .then(
       (res) => {
         this.newList = res.data
       },
       (err) => {
         console.log(err)
       }
    )
  },
  methods: {
    dosomething () {
    }
  },
  data () {
    return {
      inv: 2000,
      newList: [],
      productList: {
        pc: {
          title: 'PC产品',
          list: [
            {
              name: '数据统计',
              url: 'http://starcraft.com'
            },
            {
              name: '数据预测',
              url: 'http://warcraft.com'
            },
            {
              name: '流量分析',
              url: 'http://overwatch.com',
              hot: true
            },
            {
              name: '广告发布',
              url: 'http://hearstone.com'
            }
          ]
        },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }
          ]
        }
      },
      boardList: [
        {
          title: '开放产品',
          description: '开放产品是一款开放产品',
          id: 'car',
          toKey: 'analysis',
          saleout: false
        },
        {
          title: '品牌营销',
          description: '品牌营销帮助你的产品更好地找到定位',
          id: 'earth',
          toKey: 'count',
          saleout: false
        },
        {
          title: '使命必达',
          description: '使命必达快速迭代永远保持最前端的速度',
          id: 'loud',
          toKey: 'forecast',
          saleout: true
        },
        {
          title: '勇攀高峰',
          description: '帮你勇闯高峰，到达事业的顶峰',
          id: 'hill',
          toKey: 'publish',
          saleout: false
        }
      ],
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
.index-page{
  width: 1200px;
  margin: 0 auto;
  height: 1000px;
  padding: 20px;
  margin-bottom: 20px;

  .index-page-left{
    width: 300px;
    float: left;
    border: 1px solid #ccc;
    .index-page-left-box{
      h2{
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
      }
      h3{
          padding: 0 15px;
          font-weight: bold;
          color: #222;
      }
      .left-box-item{
        ul{
          padding: 10px 15px;
          li{
            padding: 5px;
            .news-item{
              width: 95px;
              display: inline-block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
  .index-page-right{
    width: 850px;
    float: left;
    margin-left: 10px;
    .border-list{

      .border-list-item{
        float: left;
        width: 360px;
        background: #fff;
        box-shadow: 0 0 1px #ddd;
        padding: 20px;
        margin-right: 10px;
        margin-bottom: 20px;
        .border-item-inner{
          height: 125px;
          padding-left: 120px;
          line-height: 30px;
          font-size:16px;
          h2 {
            font-size: 18px;
            font-weight: bold;
            color: #000;
            margin-bottom: 15px;
          }
        }
        .index-bord-hill{
          background: url(../assets/images/hill.png) no-repeat;
        }
        .index-bord-car{
            background: url(../assets/images/car.png) no-repeat;
        }
        .index-bord-loud{
              background: url(../assets/images/loud.png) no-repeat;
        }
        .index-bord-earth{
                background: url(../assets/images/earth.png) no-repeat;
        }

      }
      .line-last{
        margin-right: 0;
      }
    }
  }
}
</style>
