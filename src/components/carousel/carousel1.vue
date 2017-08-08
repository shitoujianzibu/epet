<template>
  <carousel :indicators="true" :auto="3000">
    <div v-for="i in 1">carousel-item-{{i-1}}</div>
  </carousel>
</template>
<script>
  import Carousel from 'vue-m-carousel'
  export default {
    components: {
      Carousel
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    box-sizing content-box
    width 100%
    overflow hidden
    position relative
    .carousel-track
      height 100%
      min-width 100%
      position absolute
      top 0
      left 0
      white-space nowrap
      display table-cell
      font-size 0
      .carousel-item
        width 100vw
        height 100%
        overflow hidden
        display inline-block
        font-size 16px
    .carousel-indicators
      position absolute
      height 0
      bottom 40px
      left 0
      width 100%
      text-align center
      .carousel-dot
        display inline-block
        width 10px
        height 10px
        border-radius 50%
        margin 10px
        background #fff
        &.active
           background red
</style>
