<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @handleLetterParent="getLetter"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from '@/components/city/CityHeader'
import CitySearch from '@/components/city/CitySearch'
import CityList from '@/components/city/CityList'
import CityAlphabet from '@/components/city/CityAlphabet'
export default {
  name: 'City',
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/mock/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    getLetter (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
