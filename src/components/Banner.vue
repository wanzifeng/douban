<template>
  <div class="swiper-container" :class="swipeId">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div :class="{'swiper-pagination':pagination}" :style="{'text-align':paginationPosition}"></div>
  </div>
</template>
<script>
  import "../assets/libs/swiper/js/swiper.js"
  export default{
    data: function () {
      return {
      }
    },
    props: {
      swipeId: {
        type: String,
        default: ""
      },
      pagination:{
        type:Boolean,
        default:true
      },
      paginationPosition:{
        type:String,
        default:"center"
      },
      loop:{
        type:Boolean,
        default:true
      },
      direction:{
        type:String,
        default:"horizontal"
      },
      autoplay:{
        type:Number,
        default:0
      },
      effect:{
        type:String,
        default:'slide'
      },
      paginationType:{
        type:String,
        default:"bullets"
      },
      slidesPerView:{
        default:1
      },
      freeMode:{
        type:Boolean,
        default:false
      },
      freeModeMomentum:{
        type:Boolean,
        default:false
      },
      touchRatio:{
        type:Number,
        default:0.5
      }
    },
    mounted:function () {
      var That=this;
      var mySwiper=new Swiper("."+That.swipeId,{
        loop:That.loop,
        direction:That.derection,
        autoplay:That.autoplay,
        effect:That.effect,
        pagination:'.swiper-pagination',
        paginationType:That.paginationType,
        autoplayDisableOnInteraction:false,
        resistance:false,
        touchRatio:That.touchRatio,
        slidesPerView:That.slidesPerView,
        freeMode:That.freeMode,
        freeModeMomentum:That.freeModeMomentum,
      })
    }
  }
</script>
<style>
  @import "../assets/libs/swiper/css/swiper.css";
  .swiper-container img{width: 100%;}
  .swiper-pagination-bullet-active{background-color: white;}
</style>

