<template>
  <div>
    <div class="topWrapper1">
      <div class="headerTop">
        <div class="personal">
          <a href="javascript:;" @click="back">
            <img src="./personal-bico1.png" alt="">
          </a>
        </div>
        <span>品牌特卖</span>
        <div class="imgtk"></div>
      </div>
      <div class="headerNav">
        <div>
          <router-link to="/">
            <img src="./head_icon1.png" alt="">
            <span>首页</span>
          </router-link>
        </div>
        <div>
          <router-link to="/">
            <img src="./head_icon2.png" alt="">
            <span>商品分类</span>
          </router-link>
        </div>
        <div>
          <router-link to="/">
            <img src="./head_icon4.png" alt="">
            <span>购物车</span>
          </router-link>
        </div>
        <div>
          <router-link to="/">
            <img src="./head_icon5.png" alt="">
            <span>我的e宠</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="bannerWrapper">
      <img src="./banner.jpg" alt="">
    </div>
    <div class="brandWrapper">
      <div ref="wrapper" class="scrollNav">
        <ul class="list">
          <li class="item active">
            <i class="new"></i>
            <div class="describe">
              <h1>最新上架</h1>
              <h2>New arrival</h2>
            </div>
          </li>
          <li class="item">
            <i class="hot"></i>
            <div class="describe">
              <h1>最热活动</h1>
              <h2>The hottest</h2>
            </div>
          </li>
          <li class="item">
            <i class="food"></i>
            <div class="describe">
              <h1>最热活动</h1>
              <h2>The hottest</h2>
            </div>
          </li>
          <li class="item">
            <i class="hot"></i>
            <div class="describe">
              <h1>最热活动</h1>
              <h2>The hottest</h2>
            </div>
          </li>
          <li class="item">
            <i class="food"></i>
            <div class="describe">
              <h1>最热活动</h1>
              <h2>The hottest</h2>
            </div>
          </li>
        </ul>
      </div>
      <split></split>
      <split></split>
      <ul class="content">
        <li>
          <img src="./1.jpg" alt="">
        </li>
        <split></split>
        <li>
          <img src="./2.jpg" alt="">
        </li>
        <split></split>
        <li>
          <img src="./1.jpg" alt="">
        </li>
        <split></split>
        <li>
          <img src="./2.jpg" alt="">
        </li>
        <split></split>
      </ul>
    </div>
    <div class="footWrapper">
      <div class="foot">
        <div class="touch">
          触屏版
        </div>
        <div class="client">
          <router-link to="/client">
            <span>手机客户端</span>
          </router-link>
        </div>
        <div class="about">
          <router-link to="/about">
            <span>关于我们</span>
          </router-link>
        </div>
        <div class="contact">
          <router-link to="/contact">
            <span>联系我们</span>
          </router-link>
        </div>
      </div>
      <div class="copy">
        © wap.epet.com 版权：重庆易宠科技有限公司
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import split from '../spilt/split.vue'
  export default {
    created () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            startY: 0,
            scrollX: true
          })
        } else { // 刷新滚动
          this.scroll.refresh()
        }
      })
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    },
    components: {
      split
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus.styl"
.topWrapper1
  .headerTop
    border-1px(#999)
    position: relative
    width 100%
    height 50px
    .personal
      position absolute
      width 22px
      height 20px
      top 17px
      left 20px
      img
        height  100%
    span
      width 100%
      display block
      line-height 50px
      text-align center
      font-size 18px
    .imgtk
      position absolute
      top 17px
      right  20px
      width 20px
      height 20px
      background url(./imgtk-new.png) no-repeat
      background-size 20px 20px
  .headerNav
    width 100%
    height 72px
    padding 10px 0
    box-sizing border-box
    display none
    div
      width 25%
      float left
      img
        display block
        width 40px
        margin 0 auto
      span
        display block
        width 100%
        text-align center
.bannerWrapper
  width 100%
  height 200px
  border-1px(#fff)
  img
    width 100%
    height 100%
.brandWrapper
  .scrollNav
    width 100%
    height 40px
    background #6a1e9f
    overflow hidden
    .list
      width 200%
      height 100%
      overflow hidden
      .item
        float left
        font-size 12px
        line-height 16px
        overflow hidden
        width 150px
        padding-left  30px
        color #fff
        &.active
          border-bottom 3px solid #ff0
          color #ff0
        i
          float left
          width 25px
          height 28px
          margin-top 5px
          &.new
            background url(./icons.png) no-repeat
            background-size 200.4px 28.2px
            background-position -151px 0px
          &.hot
            background url(./icons.png) no-repeat
            background-size 200.4px 28.2px
            background-position -126px 0px
          &.food
            background url(./icons.png) no-repeat
            background-size 200.4px 28.2px
            background-position -25px 0px
        .describe
          float left
          margin 5px 0 0 20px
  .content
    width 100%
    li
      img
        width 100%
.footWrapper
  width 100%
  height 122px
  padding-top 20px
  .foot
    width 100%
    display flex
    justify-content center
    div
      margin 0 5px
  .copy
    font-size 12px
    text-align center
    margin-top 15px
</style>
