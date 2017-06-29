<template>
  <div class="fixed-wrap">
    <div class="header-wrap">
      <div :class="cla" :style="{background:col,'border-bottom':bor}">
        <slot></slot>
        <slot name="firstimage"></slot>
        <slot name="secondimage"></slot>
        <slot name="thirdimage"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {

      }
    },
    props: {
      col:{
        default:"#f8f8f8"
      },
      bor:{
        default:"1px solid #e3e3e3"
      },
      cla:{
          default:"my-header"
      }
    }
  }
</script>
<style>
  .fixed-wrap{width: 100%;height: 9.2vh;}
  .header-wrap{height: 9.2vh;position: fixed;top: 0;left:0;width: 100%;font-size: 20px;font-family: "华文细黑";font-weight: bold;z-index: 2;}
  .my-header{width: 100%;padding-top: 24px;height: 44px;line-height:44px;color:#110808;text-align: center;}
  .my-header img:nth-of-type(1){
    width: 27px;
    position: absolute;
    right: 22px;
    bottom: 7px;
  }
  .my-header img:nth-of-type(2){
    width: 27px;
    position: absolute;
    right: 75px;
    bottom: 7px;
  }
</style>
