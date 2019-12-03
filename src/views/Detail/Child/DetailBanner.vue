<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="imgUrl" alt="">
      <div class="banner-info">
        <div class="banner-tittle">广东广州广州塔</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary v-show="showGallary" @closeGallary="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/components/gallary/Gallary'
export default {
  name: 'DetailBanner',
  components: { CommonGallary },
  data () {
    return {
      imgUrl: require('@/assets/images/detailSwiper1.jpg'),
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 51%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      display: flex
      color: #fff
      text-align: left
      font-size: .32rem
      padding: 0 .2rem
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
      .banner-number
        margin-top: .14rem
        padding: 0 .4rem
        line-height: .32rem
        height: .32rem
        font-size: .24rem
        border-radius: .2rem
        background-color: rgba(0, 0, 0, .8)
        .banner-icon
          font-size: .24rem
</style>
