<template>
  <div class="movie-des">
    <img :src="movieDes" alt="">
    <h3 class="movie-title">{{ movieDesTitle }}</h3>
    <p>{{ movieDesCon }}</p>
  </div>
</template>
<script>
    export default{
        data: function () {
            return {
              movieDes:require("../assets/images/020.jpg"),
              movieDesTitle:"神奇女侠竟然是逗比？和她恋爱注定要悲剧？",
              movieDesCon:"《神奇女侠》圆桌访谈"
            }
        },
        methods: {},
        components: {}
    }
</script>
<style>
.movie-des{margin-top: 15px;background-color: #fff;padding-bottom: 20px;}
.movie-des img{width: 100%;}
  .movie-des h3{padding-left: 16px;padding-top: 15px;line-height: 26px;height: 26px;color: #050505;font-size: 16px;}
.movie-des p{padding-left: 12px;line-height: 20px;height: 20px;color: #aeaeae;}
</style>
