<template>
    <div class="hot">
      <span></span>
      <h2>{{ hot }}</h2>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                hot:"热点"
            }
        },
        methods: {},
        components: {}
    }
</script>
<style>
.hot{color: #ff7633;font-size: 14px;position: relative;text-align: left;padding-top:16px;padding-left:21px;line-height: 20px;height: 20px;background-color: #fff;}
.hot h2{font-weight: normal;}
  .hot span{position: absolute;left: 0;width: 4px;height: 20px;bottom:0;background-color:#ff7633; }
</style>
