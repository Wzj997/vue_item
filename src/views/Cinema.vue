<template>
    <div class="cinema" :style="mystyle">
        <ul>
            <li v-for="data in datalist" :key="data.cinemaId">
                {{ data.name }}
                <p style="font-size:12px">{{ data.address }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    // console.log(document.documentElement.clientHeight)
    this.mystyle.height = document.documentElement.clientHeight - 50 + 'px'
    var id = localStorage.getItem('cityId')
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=7190705`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16080339542202364740108289","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.datalist = res.data.data.cinemas
      this.$nextTick(() => {
        var bs = new BetterScroll('.cinema', {
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
        console.log(bs)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
    li{
        height: 80px;
    }
    .cinema{
        position: relative;
        height: 500px;
        overflow: hidden;
    }
</style>
