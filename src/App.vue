<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import dog from './components/dog/dog.vue'
  export default {
    created () {
      this.sendDogAjax()
    },
    methods: {
      sendDogAjax () {
        // console.log(this.$store)
        this.$store.dispatch('sendDogAjax')
      }
    },
    components: {
      dog
    }
  }
</script>

<style>

</style>
