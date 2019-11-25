<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper" >
    <swiper-slide v-for="(page, index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.iconUrl" alt="">
        <p class="icon-desc">{{ item.desc }}</p>
      </div>
    </div>
    </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/variables.styl'
  @import '~@/assets/css/mixins.styl'
  .icons >>> .swiper-container {
    height: 0
    padding-bottom: 50%
  }
  .icons
    height: 0
    padding-bottom: 50%
    overflow: hidden
    .icon
      width: 25%
      padding-bottom: 25%
      float: left
      height: 0
      position: relative
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        padding: .1rem
        .icon-img-content
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: -.44rem
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        ellipsis()
</style>
