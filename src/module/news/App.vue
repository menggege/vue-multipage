<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
  import 'assets/css/reset.css';
  import 'assets/css/common.css';
  import Header from 'components/Header'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>

</style>
