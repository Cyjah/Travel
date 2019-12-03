<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from '@/views/Detail/Child/DetailBanner'
import DetailHeader from '@/views/Detail/Child/DetailHeader'
import DetailList from '@/views/Detail/Child/DetailList'
export default {
  name: 'Detail',
  components: { DetailBanner, DetailHeader, DetailList },
  data () {
    return {
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人子票1',
              children: [
                {
                  title: '成人孙子票1'
                }
              ]
            },
            {
              title: '成人子票2'
            }
          ]
        },
        {
          title: '学生票'
        },
        {
          title: '儿童票'
        },
        {
          title: '特惠票'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
