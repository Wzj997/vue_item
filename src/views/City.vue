<template>
    <div>
      <v-touch v-on:swipeleft="onSwipeLeft">
        <div style="height:200px;background:red;">center</div>
      </v-touch>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button>

      <mt-swipe :auto="4000" :showIndicators='false'>
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>

      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron"></mt-cell>
          <mt-cell title="Alden"></mt-cell>
          <mt-cell title="Austin"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        ...
        <mt-index-section index="Z">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>

</template>
<script>
import Vue from 'vue'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, { name: 'v-touch' })
export default {
  data () {
    return {
      radio: '2',
      activeName: '1'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('局部盘查')
    // if (true) {
    //   next()
    // } else {
    //   next('/login')
    // }
    next()
  },
  methods: {
    onSwipeLeft () {
      console.log('left')
    },
    open () {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
          // console.log('conform')
        }
      })
    }
  }
}
</script>
<style>
  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
  div .mint-swipe{
    height: 200px;
  }
  .mint-swipe .mint-swipe-indicator.is-active{
    background-color: red;
  }
</style>
