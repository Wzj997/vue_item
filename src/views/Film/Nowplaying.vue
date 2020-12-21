<template>
    <div>
        nowplaying
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0"
        infinite-scroll-immediate-check='false'>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
                <img :src="data.poster">
                {{ data.name }}
                <p>观众评分{{ data.grade }}</p>
                <p>主演： {{ data.actors | actorfilter }}</p>
            </li>
        </ul>
        <div v-show="isShow">正在加载中.......</div>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Indicator } from 'mint-ui'
Vue.filter('actorfilter', function (data) {
  // console.log(data)
  if (data) {
    var newlist = data.map(item => item.name) // 把data数组用map映射成newlist数组，只有名字
    // console.log(newlist)
    return newlist.join(' ')
  } else {
    var newstr = '暂无主演'
    return newstr
  }
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      count: 1,
      total: 0,
      isShow: true
    }
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=548878',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16080339542202364740108289"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data.films
      Indicator.close()
      this.total = res.data.data.total
    })
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      // 编程式导航 -- 路径跳转
      this.$router.push(`/detail/${id}`)
      // 编程式导航 -- 名字跳转
      // this.$router.push({ name: 'kerwindetail', params: { id: id } })
    },
    loadMore () {
      console.log('到底了')
      this.loading = true // 禁用

      this.count++

      if (this.datalist.length === this.total) {
        this.isShow = false
        return
      }
      axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.count}&pageSize=10&type=1&k=548878`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16080339542202364740108289"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data.data.films)
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
ul{
    li{
        padding: 10px;
        overflow: hidden;
        img{
            float: left;
            width: 100px;
        }
    }
}
</style>
