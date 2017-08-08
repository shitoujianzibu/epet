<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
  </mt-swipe>
</template>
<script>
  import Vue from 'vue'
  import { Swipe, SwipeItem } from 'mint-ui'

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
</script>
<style>
</style>
