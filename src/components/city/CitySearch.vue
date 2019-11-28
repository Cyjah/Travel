<template>
  <div>
    <div class="search">
    <input v-model="keywords" class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" ref="search" v-show="keywords">
    <ul>
      <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{ item.name }}</li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keywords: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keywords () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keywords) !== -1 || value.name.indexOf(this.keywords) !== -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        if (!this.keywords) {
          this.list = []
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/variables.styl'
  .search
    height: .72rem
    background-color: $bgColor
    padding: 0 .1rem
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
      box-sizing: border-box
  .search-content
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background-color: #eee
    z-index: 1
    text-align: left
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background-color: #fff
</style>
