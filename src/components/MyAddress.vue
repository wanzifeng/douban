<template>
  <div class="address clearfix">
    <div class="current-address">
      <span class="left">当前城市：</span><span class="left current-add">{{ myCity }}</span><span class="icon">></span>
    </div>
    <div class="current-address current-time">
      <span class="right">类型 时间 地点</span><span class="icon">></span>
    </div>
  </div>
</template>
<script>
    export default{
        data: function () {
            return {
                myCity:'武汉'
            }
        },
        methods: {},
        components: {}
    }
</script>
<style>
  .address{margin-top: 11px;background-color: #fff;line-height: 44px;color: #a4a4a4;width: 100%;font-family: Consolas;}
  .address .current-address{width: 50%;float: left; }
  .address .icon{float: right;margin-right: 17px;}
  .address .left{padding-left: 19px;float: left}
  .address .right{padding-left: 19px;border-left: 2px solid #f8f8f8;float: left;}
  .address .current-add{float: left;padding-left: 0;color: #47bf5a;}
</style>
