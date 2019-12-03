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
import HomeHeader from '@/views/Home/Child/HomeHeader'
import HomeSwiper from '@/views/Home/Child/HomeSwiper'
import HomeIcons from '@/views/Home/Child/HomeIcons'
import HomeRecommend from '@/views/Home/Child/HomeRecommend'
import HomeWeekend from '@/views/Home/Child/HomeWeekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/mock/index.json?city=' + this.city).then(this.getHomeInfoSucc).catch(error => console.log(error))
    },
    getHomeInfoSucc (res) {
      res = res.data.data
      this.swiperList = res.swiperImageList
      this.iconList = res.iconList
      this.recommendList = res.recommendList
      this.weekendList = res.weekendList
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
