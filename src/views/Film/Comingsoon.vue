<template>
    <div>
        <ul>
            <li v-for="data in $store.state.comingList" :key="data.filmId" @click='handleClick(data.isPresale,data.filmId)'>
                <img :src="data.poster">
                {{ data.name }}
                <p>观众评分{{ data.grade }}</p>
                <p>主演： {{ data.actors | actorfilter }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  methods: {
    handleClick (data, id) {
      if (!data) {
        MessageBox({
          title: '提示',
          message: '没有排期，看看其他电影吧',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            console.log('回到首页')
            this.$router.push('/film/nowplaying')
          }
        })
      }
      this.$router.push({ name: 'kerwindetail', params: { id: id } })
    }
  },
  mounted () {
    if (this.$store.state.comingList.length === 0) {
      // ajax请求
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
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
