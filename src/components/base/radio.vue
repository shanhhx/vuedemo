<template>
<div class="my-radio">
 <span :class="{ active:nowIndex === index }" v-for="(item, index) in versionList" :value="item.value" @click="seleted(index)">{{ item.label }}</span>
</div>

</template>

<script>
export default {
  props: {
    versionList: {
      type: Array,
      defaulf: [{
        label: 'text',
        value: '0'
      }]
    }
  },
  methods: {
    seleted (index) {
      this.nowIndex = index
      this.$emit('onchange', index)
    }
  },
  data () {
    return {
      drop: false,
      nowIndex: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  .my-radio{

    span{
      float: left;
      border: 1px solid #ccc;
      margin-left: 10px;
      width: 80px;
      text-align: center;
      height: 20px;
      line-height: 20px;
    }
    .active{
      color: red;
      background: #ddd;
    }
  }
</style>
