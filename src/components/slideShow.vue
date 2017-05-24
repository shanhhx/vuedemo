<template>
  <div class="slide-show" @mouseover="stopInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img  :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img  :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(preIndex)">&lt;</li>
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>

</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0
    }
  },
  computed: {
    preIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.nowIndex = index
      this.$emit('onchange', index)
    },
    runInv () {
      this.invd = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    stopInv () {
      clearInterval(this.invd)
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
  .slide-trans-enter-active {
    transition: all .5s;
  }
  .slide-trans-enter {
    transform: translateX(900px);
  }
  .slide-trans-old-leave-active {
    transition: all .5s;
    transform: translateX(-900px);
  }
  .slide-show {
    position: relative;
    margin: 0px 15px 15px 0;
    width: 800px;
    height: 470px;
    overflow: hidden;
    h2{
      position: absolute;
      width: 100%;
      color: #fff;
      background: rgba(0,0,0,.5);
      bottom: 20px;
      height: 30px;
      text-align: left;
      padding-left: 15px;
      line-height: 30px;
    }
  }
  .slide-img {
    width: 100%;
  }
  .slide-img img {
    width: 100%;
    position: absolute;
    top: 0;
  }
  .slide-pages {
    position: absolute;
    bottom: 27px;
    right: 15px;
    li{
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      color: #fff;
      .on{
        text-decoration: underline;
        color: #fff;
      }
    }
  }

</style>
