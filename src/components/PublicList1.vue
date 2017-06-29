<template>
  <div class="movie-list1">
    <h3>{{ filmTitle }}<span>更多></span></h3>
    <div class="list-wrap">
      <Banner swipeId="myclass2" :autoplay=0 slidesPerView='auto' :pagination="false" :freeMode="true" :loop="false" :touchRatio="1">

        <div class="swiper-slide" v-for="(item,index) in arrFilm1" >
          <div class="slide-wrap">
        <img :src="item.movieUrl" alt="">
        <h4 class="movie-name">{{ item.name }}</h4>
        <div class="grade">
          <img v-if="parseInt(item.grade)" :src="judgeStar(index1,item.grade)" alt="" v-for="(item1,index1) in arrImage">
          <span>{{ item.grade }}</span>
        </div>
        <div class="update-info">
          <span>{{ item.updateTo }}</span><span>{{ item.updateTime }}</span><span>{{ item.updateType }}</span><br>
          <span>{{ item.numWant }}想看</span>
        </div>
          </div>
      </div>
      </Banner>
    </div>
  </div>
</template>
<script>
  import Banner from '../components/Banner'
  export default{
    data: function () {
      return {
        arrImage: [0,1,2,3,4]
      }
    },
    props:['filmTitle','arrFilm1'],
    methods: {
      judgeStar:function (par,arg) {
        if ((arg - 0) % 2 ==0) {
          if ((parseInt(par) + 1) * 2 -1< parseInt(arg)) {
            return require("../assets/images/rating_star_xsmall_on.png");
          } else {
            return require("../assets/images/rating_star_xsmall_off.png");
          }
        }else if ((arg - 0) % 2 ==1){
          if((parseInt(par) + 1) * 2 < parseInt(arg)){
            return require("../assets/images/rating_star_xsmall_on.png");
          }else if(((parseInt(par) + 1) * 2 >= (arg-0))&&(parseInt(par)  ) * 2 < (arg-0)){
            return require("../assets/images/rating_star_xsmall_half.png");
          }else {
            return require("../assets/images/rating_star_xsmall_off.png");
          }
        } else {
          if( parseInt(arg)%2==0){
            if((parseInt(par) + 1) * 2 -1< parseInt(arg)){
              return require("../assets/images/rating_star_xsmall_on.png");
            }else if(((parseInt(par) + 1) * 2 -1>= (arg-0))&&(parseInt(par)  ) * 2 < (arg-0)){
              return require("../assets/images/rating_star_xsmall_half.png");
            }else {
              return require("../assets/images/rating_star_xsmall_off.png");
            }
          }
          else{
            if((parseInt(par) + 1) * 2 -1<= parseInt(arg)){
              return require("../assets/images/rating_star_xsmall_on.png");
            }else {
              return require("../assets/images/rating_star_xsmall_off.png");
            }
          }
        }
      }
    },
    components: {
      Banner
    }
  }
</script>
<style>
  .movie-list1{margin-top: 10px;background-color: #fff;padding-left: 15px;padding-bottom: 21px;overflow: hidden;}
  .movie-list1 h3{font-size: 20px;line-height: 66px;height: 66px;font-family: Consolas;padding-right: 18px;}
  .movie-list1 span{float: right;color: #6ccc7c;font-size: 18px;}
  .movie-list1 .swiper-slide{list-style-type: none;width: 320px;margin-right: 10px;float: left;overflow: hidden;border: 1px solid #e7e7e7;}
  .movie-list1 .swiper-slide img{width: 80px;border: 1px solid #e7e7e7;float: left;margin: 11px 16px 11px 11px ; }
  .movie-list1 .swiper-slide h4{font-size: 16px;padding-top: 11px;line-height: 22px;font-family: Consolas;white-space: nowrap;}
  .movie-list1 .swiper-slide .grade{height: 12px;line-height: 12px;width: 100%;margin-top: 3px;}
  .movie-list1 .grade img{width: 12px;float: left;border: none;margin: 0;}
  .movie-list1 .grade span{float: left;font-size: 12px;color: #a3a3a3;margin-left: 5px; }
  .movie-list1 .update-info{line-height: 20px;width:100%;margin-top: 5px; }
  .movie-list1 .update-info span{float: left;font-size: 14px;color: #a3a3a3; }
</style>
