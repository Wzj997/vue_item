<template>
    <div v-if="filminfo">
        <!-- detail -- {{$route.params.id}} -->
        <img :src="filminfo.poster" class="poster">
        <h2>{{ filminfo.name }}</h2>

        <h3>演职人员</h3>
        <swiper perview = '4' class="actorswiper" myclassname='actorswiper'>
          <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
            <img :src="data.avatarAddress"/>
            <p>{{ data.name }}</p>
          </div>
        </swiper>
        <h3>剧照</h3>
         <swiper perview = '3' class="photoswiper" myclassname='photoswiper'>
          <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
            <img :src="data"/>
          </div>
        </swiper>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from './Detail/DetailSwiper'
// import bus from '@/bus'
export default {
  data () {
    return {
      filminfo: null
    }
  },
  props: ['id'],
  beforeMount () {
    // console.log('发麻药了')
    // bus.$emit('maizuo', false)
    // this.$store.state.isTabbarShow = false
    this.$store.commit('HiMaizuoTabbar', false)
  },
  mounted () {
    // console.log('要id获取详情信息', this.$route.params.id, this.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=7421969`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16080339542202364740108289","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data)
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  },

  beforeDestroy () {
    // bus.$emit('maizuo', true)
    // this.$store.state.isTabbarShow = true
    this.$store.commit('ShowMaizuoTabbar', true)
  },
  components: {
    swiper
  }
}
</script>
<style lang="scss" scoped>
.poster{
  width: 100%;
  height: 200px;
}
</style>
