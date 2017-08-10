<template>
  <div>
    <epet-header></epet-header>
      <div class="indexBox" ref="indexBoxWrapper">
        <scroller>
          <div>
            <div class="banner1">
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
              <div class="box3 swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="#">
                      <img class="faddish" src="https://img2.epetbar.com/nowater/2017-06/27/16/986dc2be74b6528cea780c2efbd51988.gif">
                    </a>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
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
              <div class="top2">
                <img class="first" src="./suprice.png" alt="">
                <div class="time">距本场结束</div>
                <countDown></countDown>
                <img class="last" src="./more.png" alt="">
              </div>
              <div class="supriceNav">
                <div class="box1 swiper-container">
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
            <div class="hotColumn">
              <img class="hotPic" src="./8.jpg" alt="">
              <div class="picWrapper">
                <img class="left" src="./11.png" alt="">
                <img class="top3" src="./10.jpg" alt="">
                <img class="bottom" src="./9.jpg" alt="">
              </div>
            </div>
            <split></split>
            <div class="newVideo">
              <div class="picWrapper">
                <img class="hotPic" src="./12.png" alt="">
                <img class="more" src="./more.png" alt="">
              </div>
              <div class="video">
                <img class="epet" src="./13.png" alt="">
                <img class="play" src="./play.png" alt="">
                <div class="foot">
                  <span class="dog">狗冰棍，真凉快</span><span class="cold">#狗狗玩具</span>
                  <span class="count">36477</span>
                  <img class="view" src="./view-black.png" alt="">
                </div>
              </div>
            </div>
            <split></split>
            <div class="experience">
              <div class="picWrapper">
                <img class="experience" src="./experience.png" alt="">
                <img class="more" src="./more.png" alt="">
              </div>
              <div class="banner">
                <mt-swipe :auto="4000">
                  <mt-swipe-item>
                    <a href="#">
                      <img src="./14.jpg" alt="">
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
            </div>
            <split></split>
            <div class="special">
              <div class="picWrapper">
                <img class="hotPic" src="./special.png" alt="">
              </div>
            </div>
            <div class="special1">
              <div class="head">
                <span class="title">丝亮3免1</span>
                <span class="decrease">丝亮3免1</span>
              </div>
              <div class="picWrapper">
                <img class="pic" src="./twodog.jpg" alt="">
              </div>
            </div>
            <div class="special1">
              <div class="head">
                <span class="title">丝亮3免1</span>
                <span class="decrease">丝亮3免1</span>
              </div>
              <div class="picWrapper">
                <img class="pic" src="./twodog.jpg" alt="">
              </div>
            </div>
            <div class="special1">
              <div class="head">
                <span class="title">丝亮3免1</span>
                <span class="decrease">丝亮3免1</span>
              </div>
              <div class="picWrapper">
                <img class="pic" src="./twodog.jpg" alt="">
              </div>
            </div>
            <div class="special1">
              <div class="head">
                <span class="title">丝亮3免1</span>
                <span class="decrease">丝亮3免1</span>
              </div>
              <div class="picWrapper">
                <img class="pic" src="./twodog.jpg" alt="">
              </div>
            </div>
            <div class="special1">
              <div class="head">
                <span class="title">丝亮3免1</span>
                <span class="decrease">丝亮3免1</span>
              </div>
              <div class="picWrapper">
                <img class="pic" src="./twodog.jpg" alt="">
              </div>
            </div>
            <div class="special1">
              <div class="head">
                <span class="title">丝亮3免1</span>
                <span class="decrease">丝亮3免1</span>
              </div>
              <div class="picWrapper">
                <img class="pic" src="./twodog.jpg" alt="">
              </div>
            </div>
            <div class="public">
              <div class="picWrapper">
                <img class="public" src="./public.jpg" alt="">
                <img class="more" src="./know.png" alt="">
              </div>
              <div class="bgImg">
                <div class="wrapper">
                  <p><span>截止今日，TA公益已联合E宠商城和</span><b class="bgW">13</b><span>家品牌</span></p>
                  <p><span>累积捐赠</span><b class="red">8955,455.34</b><span>元</span></p>
                  <p><span>已合作</span><b class="white">7</b><span>家公益组织，举办参与</span><b class="bgW">2</b>
                    <span>场公益活动,助养</span><b class="bgW">32</b><span>位领养人</span></p>
                </div>
              </div>
            </div>
            <div class="footSponsor">
              <div class="leftFix">
                <img src="./sponsor.png" alt="">
              </div>
              <div class="banner">
                <div class="box2 swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="picWrapper">
                        <img src="./chuncui.jpg" alt="">
                      </div>
                      <span>已捐助￥23452.54</span>
                    </div>
                    <div class="swiper-slide">
                      <div class="picWrapper">
                        <img src="./annamate.jpg" alt="">
                      </div>
                      <span>已捐助￥23452.54</span>
                    </div>
                    <div class="swiper-slide">
                      <div class="picWrapper">
                        <img src="./chuncui.jpg" alt="">
                      </div>
                      <span>已捐助￥23452.54</span>
                    </div>
                    <div class="swiper-slide">
                      <div class="picWrapper">
                        <img src="./annamate.jpg" alt="">
                      </div>
                      <span>已捐助￥23452.54</span>
                    </div>
                    <div class="swiper-slide">
                      <div class="picWrapper">
                        <img src="./chuncui.jpg" alt="">
                      </div>
                      <span>已捐助￥23452.54</span>
                    </div>
                    <div class="swiper-slide">
                      <div class="picWrapper">
                        <img src="./annamate.jpg" alt="">
                      </div>
                      <span>已捐助￥23452.54</span>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
              </div>
            </div>
            <split></split>
            <div class="ratings">
              <div class="picWrapper">
                <img class="ratings" src="./ratings.png" alt="">
                <img class="more" src="./know.png" alt="">
              </div>
            </div>
            <div class="ratingsWrapper">
              <div class="picWrapper">
                <img src="./user.jpg" alt="" class="pic">
                <div class="userWrapper">
                  <span class="user">红****w</span>
                  <span class="type">中华田园猫</span>
                </div>
                <div class="content">
                  包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                </div>
              </div>
              <div class="picWrapper">
                <img src="./user.jpg" alt="" class="pic">
                <span class="user">红****w</span>
                <span class="type">中华田园猫</span>
                <div class="content">
                  包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                </div>
              </div>
              <div class="picWrapper">
                <img src="./user.jpg" alt="" class="pic">
                <div class="user">
                  <span class="user">红****w</span>
                  <span class="type">中华田园猫</span>
                </div>
                <div class="content">
                  包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                </div>
              </div>
              <div class="picWrapper">
                <img src="./user.jpg" alt="" class="pic">
                <span class="user">红****w</span>
                <span class="type">中华田园猫</span>
                <div class="content">
                  包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
                </div>
              </div>
            </div>
          </div>
        </scroller>
      </div>
    <epet-footer></epet-footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'
  // import BScroll from 'better-scroll'

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)

  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  import split from '../spilt/split.vue'
  import countDown from '../countDown/countDown.vue'

  export default {
    created () {
      Vue.nextTick(() => {
        new Swiper('.box1', {
          pagination: 'null',
          slidesPerView: 3.5,
          paginationClickable: true,
          spaceBetween: 30
        })
        new Swiper('.box2', {
          pagination: 'null',
          slidesPerView: 2.5,
          paginationClickable: true,
          spaceBetween: 0
        })
        new Swiper('.box3', {
          pagination: 'null',
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0
        })

        /* setTimeout(() => {
          this._initscroll()
        }, 300) */
      })
    },
    methods: {
      /* _initscroll () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.indexBoxWrapper, {
            click: true
          })
        } else {
          this.scroll.refresh()
        }
      } */
    },
    components: {
      'epet-header': header,
      'epet-footer': footer,
      split,
      countDown
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus.styl"
.indexBox
  height 100%
  &.close
    padding-top 86px
  width 100%
  box-sizing border-box
  /*轮播图*/
  .banner1
    width 100%
    height 160px
    padding-top 141px
    .mint-swipe-indicators
      .mint-swipe-indicator
        background #fff
        opacity 1
        &.is-active
          width 16px
          border-radius 4px
    img
      width 100%
      height 160px
  /*爆款*/
  .faddish
    width 100%
    height 120px
    a
      width 100%
      display inline-block
      .faddish
        width 100%
  /*中部导航*/
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
  /*每日疯抢*/
  .purchase
    margin-bottom 10px
    .top2
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


  /*热门栏目*/
  .hotColumn
    width 100%
    height 230px
    clear-fix()
    .hotPic
      width 100%
      height 40px
    .picWrapper
      font-size 0
      vertical-align top
      .left
        width 42.6666%
        height 100%
        float left
      .top3
        width 57.3333%
        height 50%
      .bottom
        width 57.3333%
        height 50%
  /*潮品视频*/
  .newVideo
    .picWrapper
      width 100%
      height 53px
      position relative
      .hotPic
        display block
        width 50%
        height 100%
        margin 0 auto
      .more
        position absolute
        right 20px
        top 7px
        width 15%
    .video
      width 100%
      position relative
      .epet
        width 100%
      .play
        width 5%
        position absolute
        margin auto
        top 0
        left 0
        bottom 0
        right 0
      .foot
        width 100%
        height 39px
        box-sizing border-box
        padding 10px 15px
        font-size 12px
        .dog, .cold
          float left
        .cold
          color #f00
        .view, .count
          line-height 19px
          float right
        .view
          margin 4px 4px 0 0
          width 10px
          height 9px
  /*体验馆*/
  .experience
    .picWrapper
      width 100%
      height 53px
      position relative
      .experience
        display block
        width 50%
        height 100%
        margin 0 auto
      .more
        position absolute
        right 20px
        top 7px
        width 15%
  .special
    .picWrapper
      width 100%
      height 53px
      position relative
      .hotPic
        display block
        width 50%
        height 100%
        margin 0 auto
    border-1px(#999)
  .special1
    .head
      width 100%
      height 45px
      box-sizing border-box
      padding 10px
      .title
        font-size 15px
      .decrease
        margin-left 10px
        font-size 12px
        color #999
    .picWrapper
      width 100%
      .pic
        width 100%
  .public
    .picWrapper
      width 100%
      height 53px
      position relative
      .public
        display block
        width 50%
        height 100%
        margin 0 auto
      .more
        position absolute
        right 20px
        top 22px
        width 15%
    .bgImg
      width 100%
      height 140px
      background url(./bgImg.jpg) 100% 100% no-repeat
      .wrapper
        padding-top 30px
        p
          font-size 14px
          font-family 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif
          font-weight bolder
          color #fff
          text-align center
          line-height 24px
        span
          font-weight bolder
        .bgW
          font-weight bolder
          background #fff
          border-radius 5px
          color red
          padding 0 5px
          margin 0 5px
        .white
          font-weight bolder
          margin 0 5px
        .red
          font-weight bolder
          color red

  .footSponsor
    width 100%
    height 81px
    .leftFix
      width 25%
      height 100%
      float left
      border-right 1px solid #e7e7e7
      box-sizing border-box
      img
        width 85%
        margin 5px 0 0 5px
    .banner
      float left
      height 100%
      width 75%
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
            box-sizing border-box
            border-right 1px solid #e7e7e7
            span
              font-size 12px
              border-top 1px solid #e7e7e7
              box-sizing border-box
              padding-top 10px
            img
              height 40px
              padding 3px 0
  .ratings
    .picWrapper
      width 100%
      height 53px
      position relative
      .ratings
        display block
        width 50%
        height 100%
        margin 0 auto
      .more
        position absolute
        right 20px
        top 22px
        width 15%
  .ratingsWrapper
    padding-left 10px
    width 100%
    box-sizing border-box
    overflow hidden
    padding-bottom 55px
    .picWrapper
      width 50%
      float left
      box-sizing border-box
      padding-right 10px
      margin-top 10px
      background #f5f5f5
      .pic
        width 100%
      .userWrapper
        width 100%
        overflow hidden
        .user
          float left
          font-size 12px
          color #333
          line-height 16px
        .type
          float right
          background #ddd
          color #333
          font-size 12px
          line-height 16px
      .content
        color #999
        height 60px
        overflow hidden
        font-size 13px
        padding 0 5px
        margin-top 5px
        line-height 20px
</style>
