<template>
  <div>
    <ul>
      <li><a href="/">首页</a></li>
      <li><a href="/module/company.html">公司简介</a></li>
      <li><a href="/module/news.html">新闻列表</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{ list-style: none; line-height: 40px; line-height: 40px;}
  ul li{display: inline-block; margin-left: 20px; font-size: 18px;}
</style>
