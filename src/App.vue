<template>
  <div id="app">
    <epet-header></epet-header>
    <router-view></router-view>
    <epet-footer></epet-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'epet-header': header,
      'epet-footer': footer
    }
  }
</script>

<style>

</style>
