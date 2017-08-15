<template>
  <div>
    新闻列表页
    <ul>
      <li><router-link to="detail">第一条新闻</router-link></li>
      <li><router-link to="detail">第二条新闻</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list'
  }
</script>

<style scoped>
  ul{list-style: none; margin-top: 50px;}
  ul li{
    display: block;
    margin:5px;
  }
</style>
