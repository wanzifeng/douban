<template>
  <div>
    <Parent></Parent>
  </div>
</template>
<script>
  import Parent from '../components/Parent'
  export default{
    data: function () {
      return {
        msg: '1dd11'
      }
    },
    components: {
      Parent
    },
    props: []
  }
</script>
<style>
</style>
