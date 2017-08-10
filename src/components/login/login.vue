<template>
<div>
  <div class="topWrapper">
    <div class="top1">
      <router-link to="/">
        <img src="./personal-bico3.png" alt="">
      </router-link>
      <router-link to="/register">
        <span>注册</span>
      </router-link>
    </div>
    <div class="logo">
      <img src="./logo.png" alt="">
    </div>
    <div class="tab">
      <ul>
        <li class="active">
          <a href="#">普通登录</a>
          <i></i>
        </li>
        <li>
          <a href="#">手机动态密码登录</a>
          <i></i>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .topWrapper
    position relative
    height 178px
    width 100%
    background url(./bgimg.png) no-repeat
    background-size 100% 100%
    .top1
      width 100%
      height 50px
      padding 0 12px
      box-sizing border-box
      line-height 50px
      img
        height 50%
        margin-top 14px
      span
        color #fff
        float right
    .logo
      height 48px
      text-align center
      img
        height 100%
        padding 12px 0 24px 0
    .tab
      position absolute
      bottom 0
      left 0
      height 44px
      width  100%
      background rgba(255, 255, 255, .3)
      li
        width 50%
        height 44px
        float left
        line-height 44px
        text-align center
        position relative
        a
          display inline-block
          color #fff
          width 100%
          height 44px
        &.active
          i
            display block
            position absolute
            width 0
            height 0
            margin-left -10px
            left 50%
            bottom 0
            border-bottom 10px solid #fff
            border-left 10px solid transparent
            border-top 10px solid transparent
            border-right 10px solid transparent
</style>
