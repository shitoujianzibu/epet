<template>
  <div>
    <epet-header></epet-header>
    <h1>新汪课堂</h1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
