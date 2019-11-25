<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
      <div class="tittle border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="tittle border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="tittle border-topbottom">A</div>
      <div class="item-list">
        <ul>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
        </ul>
      </div>
    </div>
    <div class="area">
      <div class="tittle border-topbottom">A</div>
      <div class="item-list">
        <ul>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
          <li class="item border-topbottom">阿拉尔</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/css/variables.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .tittle
      line-height: .44rem
      background-color: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
      text-align: left
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          text-align: center
          border: .02rem solid #ccc
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding: .2rem
        text-align: left
</style>
