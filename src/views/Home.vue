<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperImageList="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader'
import HomeSwiper from '@/components/home/HomeSwiper'
import HomeIcons from '@/components/home/HomeIcons'
import HomeRecommend from '@/components/home/HomeRecommend'
import HomeWeekend from '@/components/home/HomeWeekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/mock/index.json').then(this.getHomeInfoSucc).catch(error => console.log(error))
    },
    getHomeInfoSucc (res) {
      res = res.data.data
      this.swiperList = res.swiperImageList
      this.iconList = res.iconList
      this.recommendList = res.recommendList
      this.weekendList = res.weekendList
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
