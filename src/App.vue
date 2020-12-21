<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <!-- hello xiaohei -->
    <!-- 路由容器 -->
    <router-view></router-view>
    <!-- <input type="text" ref="mytext">
    <button @click='handleAdd()'>add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{ data }}
      </li>
    </ul>

    <navbar>
      <button @click="isShow = !isShow">navbar-click</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar> -->
  </div>
</template>

<script>
// import navbar from './components/Navbar'
// import sidebar from './components/Sidebar'
// import axios from 'axios'
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex' // ES6导出
// import bus from '@/bus'
// 全局组件
// import Vue from 'vue'
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)
export default {
  data () {
    return {
      // datalist: [],
      // isShow: true
    }
  },
  methods: {
    // handleAdd () {
    //   // console.log('add', this.$refs.mytext.value)
    //   this.datalist.push(this.$refs.mytext.value)
    // }
  },

  mounted () {
    // axios.get('/ajax/movieOnInfoList?token=').then(res => {
    //   console.log(res.data)
    // })
  },
  // beforeMount () {
  //   console.log('从这里开始订阅消息了')
  //   bus.$on('maizuo', (data) => {
  //     // console.log('被通知了maizuo', data)
  //     this.isShow = data
  //   })
  // },
  // computed: {
  //   isShow () {
  //     return this.$store.state.isTabbarShow
  //   }
  // },
  computed: {
    ...mapState(['isTabbarShow']) // ES6展开合并运算符
  },
  components: {
    // navbar: navbar,
    // sidebar: sidebar,
    tabbar
  }
}
</script>

<style lang="scss">
  // ul{
  //   list-style: none;
  //   li{
  //     background-color: yellow;
  //   }
  // }
  *{
    margin: 0;
    padding: 0;
  }
  html{
    height: 100%;
  }
  li{
    list-style: none;
  }
</style>
