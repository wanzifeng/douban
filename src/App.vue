<template>
  <div id="app" v-cloak>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <TabbarWrap></TabbarWrap>
  </div>
</template>
<script>
  import TabbarWrap from './components/TabbarWrap'
  export default {
    name: 'app',
    components:{
      TabbarWrap
    },
    created:function () {
      this.$router.push('/Home')
    }
  }
</script>
<style>
  *{padding:0;margin:0;}

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #f8f8f8;
    padding-bottom: 49px;
  }
</style>
