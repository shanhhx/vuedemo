<template>
  <div class="dialog">

    <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-cover"></div>
      <transition name="drop">
        <div class="dialog-content"  >
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
    .dialog-close {
      position: absolute;
      right: 5px;
      top: 5px;
      width: 20px;
      height: 20px;
      text-align: center;
      cursor: pointer;
      &:hover{
        color: #4fc08d;
      }
    }
  }
}
</style>
