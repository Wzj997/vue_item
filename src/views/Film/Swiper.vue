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
  mounted () {
    const vm = new Swiper('.filmswiper', {
      loop: true,
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
    console.log(vm)
  }
}
</script>
