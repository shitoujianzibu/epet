<template>
  <div>
    <epet-header></epet-header>
    <router-view></router-view>
    <epet-footer></epet-footer>
  </div>
</template>
<script>
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  export default {
    components: {
      'epet-header': header,
      'epet-footer': footer
    }
  }
</script>
<style>
</style>
