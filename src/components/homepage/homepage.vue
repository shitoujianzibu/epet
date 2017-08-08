<template>
  <div>
    <div class="indexBox" ref="indexBoxWrapper">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
              <a href="#">
                <img src="./1.png" alt="">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="#">
              <img src="./3.jpg" alt="">
            </a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href="#">
              <img src="./4.jpg" alt="">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="faddish">
        <mt-swipe :auto="0">
          <mt-swipe-item>
            <a href="#">
              <img class="faddish" src="https://img2.epetbar.com/nowater/2017-06/27/16/986dc2be74b6528cea780c2efbd51988.gif">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="middleNav">
        <ul class="wrapper">
          <li>
            <a href="#">
              <img src="./2.png" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./2.png" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./2.png" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./2.png" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./2.png" alt="">
            </a>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="purchase">
        <div class="top">
          <img class="first" src="./suprice.png" alt="">
          <div class="time">距本场结束</div>
          <img class="last" src="./more.png" alt="">
        </div>
        <div class="supriceNav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./5.jpg" alt="">
                <div class="price">
                  <span>￥</span><span>21.90</span>
                </div>
                <div class="supPrice">
                  省￥<span>13.10</span>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="./6.jpg" alt="">
                <div class="price">
                  <span>￥</span><span>21.90</span>
                </div>
                <div class="supPrice">
                  省￥<span>13.10</span>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="./7.jpg" alt="">
                <div class="price">
                  <span>￥</span><span>21.90</span>
                </div>
                <div class="supPrice">
                  省￥<span>13.10</span>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="./5.jpg" alt=""><div class="price">
                <span>￥</span><span>21.90</span>
              </div>
                <div class="supPrice">
                  省￥<span>13.10</span>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="./6.jpg" alt=""><div class="price">
                <span>￥</span><span>21.90</span>
              </div>
                <div class="supPrice">
                  省￥<span>13.10</span>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="./7.jpg" alt="">
                <div class="price">
                <span>￥</span><span>21.90</span>
                </div>
                <div class="supPrice">
                  省￥<span>13.10</span>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <split></split>
      <div class="hot">

      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  import { Swipe, SwipeItem } from 'mint-ui'

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  import split from '../spilt/split.vue'
export default {
    created () {
      Vue.nextTick(() => {
        new Swiper('.swiper-container', {
          pagination: 'null',
          slidesPerView: 3.5,
          paginationClickable: true,
          spaceBetween: 30
        })
      })
    },
    components: {
      split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus.styl"
.indexBox
  padding-top 141px
  width 100%
  height 1000px
  .banner
    width 100%
    height 160px
    img
      width 100%
      height 160px
  .faddish
    width 100%
    height 120px
    a
      width 100%
      display inline-block
      .faddish
        width 100%
  .middleNav
    clear-fix()
    .wrapper
      width 100%
      height 90px
      display flex
      li
        width 100%
        height 90px
        flex 1
        a
          width 100%
          height 90px
          img
            width 100%
            height 90px
  .purchase
    margin-bottom 10px
    .top
      clear-fix()
      width 100%
      height 64px
      padding 10px
      box-sizing border-box
      vertical-align top
      .first
        float left
        height 24px
        width  25%
        img
          width 100%
          height 100%
      .time
        float left
        height 20px
        width 40%
        margin 4px 0 0 20px
        font-size 13px
      .last
        margin-top -10px
        float right
        height 47px
    .supriceNav
      width 100%
      height 132px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 20%
            height 100%
            text-align center
            img
              width 100%
            .price
              margin 5px 0 2px 0
              font-size 16px
              color #f00
            .supPrice
              font-size 12px
              color: #999


</style>
