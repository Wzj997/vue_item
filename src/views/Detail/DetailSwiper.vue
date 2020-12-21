<template>
        <div class="swiper-container filmswiper">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  props: ['perview', 'myclassname'],
  mounted () {
    console.log(this.myclassname)
    const vm = new Swiper('.' + this.myclassname, {
      slidesPerView: this.perview,
      spaceBetween: this.myclassname === 'actorswiper' ? 20 : 10,
      freeMode: true
    })
    console.log(vm)
  }
}
</script>
<style lang="scss" scoped>
    .swiper-wrapper{
        img{
            width: 100%;
        }
    }
</style>
