<template>
    <div>
        <swiper ref="myswiper">
            <div class="swiper-slide" v-for=" data in datalist " :key="data.filmId">
              <img :src="data.poster">
            </div>
        </swiper>
        <filmheader :class="isFixed?'fixed':''"></filmheader>
        <router-view></router-view>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from '@/views/Film/Swiper'
import filmheader from '@/views/Film/Filmheader'
export default {
  data () {
    return {
      isFixed: false,
      datalist: []
    }
  },
  mounted () {
    window.onscroll = this.handleScroll
    axios({
      url: 'https://m.maizuo.com/gateway/?cinemaId=8119&k=3899352',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16080339542202364740108289","bc":"440300"}',
        'X-Host': 'mall.film-ticket.film.cinema-show-film'
      }
    }).then(res => {
      this.datalist = res.data.data.films
    })
  },
  beforeDestroy () {
    // console.log('beforeDestroy')
    window.onscroll = null
  },
  methods: {
    handleScroll () {
    //   console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)
      if (document.documentElement.scrollTop >= this.$refs.myswiper.$el.offsetHeight) {
        // console.log('unfixed')
        this.isFixed = true
      } else {
        // console.log('fixed')
        this.isFixed = false
      }
    }
  },
  components: {
    swiper,
    filmheader
  }
}
</script>
<style lang="scss" scoped>
.filmswiper{
    height: 200px;
    background-color: gray;
}
.fixed{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    background-color: white;
    height: 40px;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
}
</style>
