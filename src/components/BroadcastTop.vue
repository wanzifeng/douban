<template>
    <div class="broadcast-top">
      <img :src="BroadcastTopC" alt="">

      <h3>{{ BroadcastTopTC }}</h3>
      <p>{{ BroadcastTopTConC }}</p>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {}
        },
        methods: {},
        components: {},
      props:["BroadcastTopC","BroadcastTopTC",'BroadcastTopTConC']
    }
</script>
<style>
.broadcast-top{height: 114px;padding-left: 187px;position: relative;font-family: "华文细黑"}
.broadcast-top img{position: absolute;left: 70px;top: 20px;width: 100px;}
.broadcast-top h3{padding-top: 36px;line-height: 24px;font-size: 20px;}
.broadcast-top p{line-height: 20px;font-size: 16px;}
</style>
