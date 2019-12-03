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
import CityHeader from '@/views/City/Child/CityHeader'
import CitySearch from '@/views/City/Child/CitySearch'
import CityList from '@/views/City/Child/CityList'
import CityAlphabet from '@/views/City/Child/CityAlphabet'
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
