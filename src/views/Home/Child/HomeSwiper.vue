<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in swiperImageList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperImageList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperImageList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background-color: #fff
  .swiper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%
    background-color: #eee
    .swiper-img
      width: 100%
</style>
