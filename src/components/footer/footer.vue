<template>
<div>
  <div class="footNav">
    <ul class="clearfix">
      <router-link to="/dog/indexpage">
        <li class="index-a"></li>
      </router-link>
      <router-link to="/dog/classify">
        <li class="type-a"></li>
      </router-link>
      <router-link to="/dog/shopcart">
        <li class="cart-a"></li>
      </router-link>
      <router-link to="/dog/login">
        <li class="myepet-a">
        </li>
      </router-link>
    </ul>
  </div>
</div>
</template>
<script>

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footNav
    position fixed
    bottom 0
    left 0
    z-index 100
    width 100%
    height 55px
    background #fff
    .clearfix:after
      content: "."
      display: block
      height: 0
      clear: both
      visibility: hidden
    .clearfix
      width 100%
      height 55px
      li
        float left
        width 25%
        height 55px
      .index-a
        background url(./main_tab_1_sel.png) no-repeat center 10px
        background-size auto 40px
      .type-a
        background url(./main_tab_2.png) no-repeat center 10px
        background-size auto 40px
      .cart-a
        background url(./main_tab_3.png) no-repeat center 10px
        background-size auto 40px
      .myepet-a
        background url(./main_tab_4.png) no-repeat center 10px
        background-size auto 40px
</style>
