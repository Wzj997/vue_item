<template>
    <div>
        <mt-index-list ref="mylist">
            <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
            <div v-for="city in data.list" :key="city.cityId" @click='handleClick(city.cityId)'>
            <mt-cell :title="city.name"></mt-cell>
            </div>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // console.log(this.$refs.mylist.$el)
    this.$refs.mylist.$el.style.height = document.documentElement.clientHeight - 50 + 'px'
    axios({
      url: 'https://m.maizuo.com/gateway?k=6349550',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16080339542202364740108289","bc":"210300"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      console.log(res.data)
      this.datalist = this.handleCity(res.data.data.cities)
      console.log(this.datalist)
    })
  },
  methods: {
    handleCity (datalist) {
      console.log(datalist)
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      //   console.log(letterArr)

      var newList = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      return newList
    },
    handleClick (id) {
      console.log(id)
      localStorage.setItem('cityId', id) // 存到localhost中
      this.$router.push('/cinema')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
