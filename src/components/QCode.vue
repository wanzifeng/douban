<template>
    <div class="q-wrap">
      <div class="q-header">
        <router-link :to="this.$route.params.myUrl">
          <span class="q-delete">取消</span>
        </router-link>
        <span class="scan">扫描图书条码/二维码</span>
        <span class="gallery">相册</span>
      </div>
      <div class="q-main">
        <div class="box-wrap">
          <div class="small-box1"></div>
          <div class="small-box2"></div>
          <div class="small-box3"></div>
          <div class="small-box4"></div>
        </div>
        <span class="q-tips">
          对准图书条码、二维码自动扫描
        </span>
      </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {}
        },
        methods: {},
        components: {}
    }
</script>
<style>
  .q-wrap{width: 100vw;height: 100vh;position:fixed;left: 0;top: 0; }
  .q-header{height: 6.2vh;width: 100%;background-color: #fff;padding-top: 3vh;line-height: 6.2vh;text-align: center;}
  .q-header .q-delete,.gallery{color:#42BD56;}
  .q-delete{float: left;margin-left: 20px;}
  .gallery{float: right;margin-right: 20px;}
  .q-wrap+.tabbar-wrap{display: none;}
  .scan{font-size: 18px;}
  .q-main{height: 90.8vh;width: 100%;background-color: rgba(0,0,0,.3);padding-top: 20vh;text-align: center;}
  .box-wrap{width: 50vw;height: 50vw;background-color: rgba(0,0,0,.1);margin: 0 auto;position: relative;}
  .small-box1,.small-box2,.small-box3,.small-box4{width: 13vw;height: 13vw;position: absolute;}
  .small-box1{border-left: 3px solid #42BD56;left: 0;top: 0;border-top:3px solid #42BD56;}
  .small-box2{border-right: 3px solid #42BD56;right:0;top: 0;border-top:3px solid #42BD56;}
  .small-box3{border-left: 3px solid #42BD56;left: 0;bottom: 0;border-bottom:3px solid #42BD56;}
  .small-box4{border-right: 3px solid #42BD56;right: 0;bottom: 0;border-bottom:3px solid #42BD56;}
  .q-tips{padding:5px 10px ;background-color:rgba(0,0,0,.4);color: #fff;line-height: 20px;font-size: 18px;display: inline-block; margin-top: 20vh;border-radius: 10px;}
</style>
