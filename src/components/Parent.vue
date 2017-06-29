<template>
  <div>
    <h1> {{ msg1+msg2 }}</h1>
    <Child :myChange="changePage"></Child>
  </div>
</template>
<script>
  import Child from './Child'
  export default{
    data: function () {
      return {
        msg1: 'update your page ',
        msg2: '1'
      }
    },
    props: [],
    methods:{
      changePage:function (arg) {
        this.msg2=arg;
      }
    },
    components: {
      Child
    },
  }
</script>
<style>
</style>
