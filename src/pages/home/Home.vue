<template>
  <div>
    <div class="index-header">
      <Myheader col="#42bd56" bor="none" cla="index-top">
        <router-link :to="{name:'Search',params:{myUrl:'/Home'}}">
          <div>
            <input type="text" placeholder="影视 图书 唱片 小组等">
            <img src="../../assets/images/ic_search_gray.png" alt=""  class="search-img">
          </div>
        </router-link>
        <router-link :to="{name:'QCode',params:{myUrl:'/Home'}}">
          <div>
            <img src="../../assets/images/ic_scan_gray.png" alt="" class="scan-img">
            <div style></div>
          </div>
        </router-link>
        <router-link :to="{name:'Logger',params:{myUrl:'/Home'}}">
        <img src="../../assets/images/ic_chat_white.png" alt="" >
        </router-link>
      </Myheader>
    </div>
      <Banner :swipeId="myClass" :autoplay=3000>
        <div class="swiper-slide"><img src="../../assets/images/banner/01.jpg" /></div>
        <div class="swiper-slide"><img src="../../assets/images/banner/02.jpg" /></div>
        <div class="swiper-slide"><img src="../../assets/images/banner/03.jpg" /></div>
      </Banner>
    <!--<div id="wrapper">
        <div id="scroller">-->
      <HotDetail :hotArr="myHotArr"></HotDetail>
      <!--</div>
    </div>-->
  </div>
</template>
<script>
    import Myheader from '../../components/Myheader'
    import Banner from '../../components/Banner'
    import HotDetail from '../../components/HotDetail'
    /*import "../../assets/libs/iscroll-master/build/iscroll.js"
    import "../../assets/libs/iscroll-master/demos/demoUtils.js"*/
    export default{
        data: function () {
            return {
              myClass:"my-slider1",
              myHotArr:[
                /*{title:'我在论文“造假”工厂打工:代写、包发，年产值10亿',
                  details:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                  author:'土逗公社',
                  program:'',
                  mysrc:require('../../assets/images/001.jpg'),
                  bol:true
                },
                {title:'《飘》：少女和成人的分水岭|读书会正在直播',
                  details:'豆瓣阅读·方舟女性读书会第2期，一起聊聊飘里的女性形象。',
                  author:'豆瓣阅读',
                  program:'在豆瓣看现场',
                  mysrc:require('../../assets/images/002.jpg'),
                  bol:false
                },
                {title:'预告片精选|颜好腿长超能打！她以一己之力拯救DC电影口碑',
                  details:'《神奇女侠》口碑炸裂！DC翻身仗，全靠女侠扛！',
                  author:'豆瓣',
                  program:'预告片精选',
                  mysrc:require('../../assets/images/003.jpg'),
                  bol:true
                },{title:'我在论文“造假”工厂打工:代写、包发，年产值10亿',
                  details:'只需要三四个小时，就能攒出一篇完全可以骗过查重系统的课程论文。',
                  author:'土逗公社',
                  program:'',
                  mysrc:require('../../assets/images/001.jpg'),
                  bol:true
                }
*/
              ]
            }
        },
      methods: {
        search: function () {
          this.axios.get('/api/homeData').then((response) => {
            console.log(response.data.data.recommend_feeds);
            this.myHotArr = response.data.data.recommend_feeds;
          })
        }
      },
      components: {
        Myheader,
        Banner,
        HotDetail
      },
      props: [],
      mounted: function () {
        this.search();
       /* var myScroll;
        myScroll = new IScroll('#wrapper', { useTransition: false });
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
          capture: false,
          passive: false
        } : false);*/
      }
    }
</script>
<style>
 /* body {
    !* On modern browsers, prevent the whole page to bounce *!
    overflow: hidden;
  }*/
/*
  #wrapper {
    position: relative;
    width: 100%;
    height: 90.8vh;
    overflow: hidden;

    !* Prevent native touch events on Windows *!
    -ms-touch-action: none;

    !* Prevent the callout on tap-hold and text selection *!
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    !* Prevent text resize on orientation change, useful for web-apps *!
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    -o-text-size-adjust: none;
    text-size-adjust: none;
  }

 !* #scroller {
    position: absolute;

    !* Prevent elements to be highlighted on tap *!
    -webkit-tap-highlight-color: rgba(0,0,0,0);

    !* Put the scroller into the HW Compositing layer right from the start *!
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
  }*!*/
  .index-header{height: 9.2vh;width: 100%;}
  .index-top{width: 100%;padding-top: 3.2vh;height: 6.2vh;line-height:44px;text-align: left;position: relative;}
  .index-top input{width: 325px;height: 28px;border: none;border-radius: 5px;margin-left: 8px;padding-left: 32px;display: inline-block;color: #c9c9c9;outline: none;}
  .index-header .index-top a .search-img{
    width: 20px;
    position: absolute;
    left: 14px;
    bottom: 10px;}
  .index-header .index-top a .scan-img{
    width: 20px;
    position: absolute;
    right: 58px;
    bottom: 10px;}
  .index-top img:nth-last-of-type(2){
    width: 17px;
    position: absolute;
    right: 57px;
    bottom: 12px;
  }
  .index-top img:nth-last-of-type(1){
    width: 27px;
    position: absolute;
    right: 12px;
    bottom: 7px;
  }
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{color: #c9c9c9;}
  #app .first-image{
   width: 27px;
   position: absolute;
   right: 75px;
   bottom: 7px;}
  #app .second-image{
   width: 27px;
   position: absolute;
   right: 22px;
   bottom: 7px;
 }
</style>
