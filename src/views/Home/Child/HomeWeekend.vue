<template>
  <div>
    <div class="tittle">周末去哪儿</div>
    <ul>
      <li class="item" border-bottom v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-tittle">{{ item.tittle }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend.vue',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/mixins.styl'
  .tittle
    line-height: .8rem
    background-color #eee
    text-align: left
    text-indent: .2rem
    margin-top: .1rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    flex: 1
    padding: .1rem
    text-align: left
    .item-tittle
      line-height: .54rem
      font-size: .32rem
      text-align: left
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      text-align: left
      ellipsis()
</style>
