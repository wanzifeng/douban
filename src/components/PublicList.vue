<template>
  <div class="movie-list">
    <h3>{{ filmTitle }}
      <router-link :to="{name:toUrl,params:{myUrl:currentFilmUrl,goTo:goToFilmUrl}}">
        <span>更多></span>
      </router-link>
    </h3>
    <div class="list-wrap">
    <Banner swipeId="myclass1" :autoplay=0 slidesPerView='auto' :pagination="false" :freeMode="true" :loop="false" :touchRatio="1">
        <div class="swiper-slide" v-for="(item,index) in arrFilm" >
          <div class="slide-wrap">
            <img :src="item.movieUrl" alt="">
            <h4 class="movie-name">{{ item.name }}</h4>
            <div class="author" v-if="!item.author==''">
              {{ item.author }}
            </div>
            <div v-if="!item.grade==''" class="grade">
              <img v-if="parseInt(item.grade)" :src="judgeStar(index1,item.grade)" alt="" v-for="(item1,index1) in arrImage">
              <span>{{ item.grade }}</span>
            </div>
            <div v-if="!item.sellDate==''" class="sell-date">
              {{ item.sellDate }}
            </div>
            <div class="ticket" v-if="!item.ticket==''">
              {{ item.ticket }}
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
    props: {
      filmTitle: {
        default: ''
      }, arrFilm: {
        default: []
      }, currentFilmUrl: {
        default: ''
      }, toUrl: {
        default: ''
      },
      goToFilmUrl: {
        default: ''
      }
    },
    methods: {//par--星星的index值 arg--传入的分数
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

  .movie-list .list-wrap{}
  .movie-list{margin-top: 10px;background-color: #fff;padding-left: 15px;padding-bottom: 21px;overflow: hidden;}
  .movie-list h3{font-size: 20px;line-height: 66px;height: 66px;font-family: Consolas;padding-right: 18px;}
  .movie-list span{float: right;color: #6ccc7c;font-size: 18px;}
  .movie-list .swiper-slide {list-style-type: none;width: 100px;margin-right: 10px;float: left;overflow: hidden;}
  .movie-list .swiper-slide img{width: 98px;border: 1px solid #e7e7e7;}
  .movie-list .swiper-slide h4{font-size: 16px;padding-top: 3px;line-height: 22px;font-family: Consolas;max-height: 45px;overflow: hidden;}
  .movie-list .swiper-slide .grade{height: 12px;line-height: 12px;width: 100%;margin-top: 3px;}
  .movie-list .grade img{width: 12px;float: left;border: none;}
  .movie-list .grade span{float: left;font-size: 12px;color: #a3a3a3;margin-left: 5px; }
  .sell-date{line-height: 20px;width:100%;font-size: 14px;color: #a3a3a3; }
  .ticket{line-height: 14px;width: 50px;border: 1px solid #ff7180;text-align: center;border-radius: 4px;font-size: 12px; color: #ff7180;font-family: "Arial Narrow";}
  .author{color: #9b9b9b;line-height: 17px;font-size: 14px;}
</style>
