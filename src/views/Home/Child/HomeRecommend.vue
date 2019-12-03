<template>
  <div>
    <div class="tittle">热销推荐</div>
    <ul>
      <router-link
      tag="li" class="item border-bottom"
      v-for="item of recommendList"
      :key="item.id" :to="'/detail/' + item.id">
      <!-- <li class="item border-bottom" v-for="item of recommendList" :key="item.id"> -->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-tittle">{{ item.tittle }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      <!-- </li> -->
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend.vue',
  props: {
    recommendList: Array
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
  .item
    overflow: hidden
    display: flex
    min-width: 0
    height: 1.9rem
    .item-img-wrapper
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
      .item-img
        width: 100%
        height: 100%
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
      .item-button
        line-height: .44rem
        background-color: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        margin-top: .16rem
        color: #fff
</style>
