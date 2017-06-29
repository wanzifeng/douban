<template>
  <div class="more-wrap">
    <div>
      <div class="header-wrap">
        <Myheader>
          <span>院线电影</span>
          <router-link :to="{path:myUrl}" >
            <img src="../assets/images/ic_bar_back_green.png"  alt="" class="back-to">
          </router-link>
          <!--<router-link :to="{name:'Search',params:{myUrl:currentUrl}}">-->
           <span class="defaultAdd">武汉 <img src="../assets/images/ic_arw_xs.png" alt=""></span>
          <!--</router-link>-->
        </Myheader>
      </div>
      <div class="myfix">
        <div class="bar-wrap">
          <router-link :to='{path:"/More/CurrentFilm",params:{myUrl:myUrl}}'>
            <div class="left-bar" :class="{active:myGoTo1=='/More/CurrentFilm'}" @click="active('/More/CurrentFilm')">
              正在热映
            </div>
          </router-link>
          <router-link to="/More/ComingFilm">
            <div class="right-bar" :class="{active:myGoTo1=='/More/ComingFilm'}" @click="active('/More/ComingFilm')">
              即将上映
            </div>
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Myheader from '../components/Myheader'
  export default{
    data: function () {
      return {
        defaultAdd: '武汉',
        myUrl:'',
        myGoTo1:''
      }
    },
    methods: {
      active: function (val) {
        this.myGoTo1 = val;
        console.log(this.$route.params.myUrl)
      }
    },
    components: {
      Myheader
    },
    mounted: function () {
      console.log(this.$route.params.myUrl)
      this.myUrl = this.$route.params.myUrl;
      console.log(this.$route.params.goTo)
      var myGoTo = this.$route.params.goTo;
      this.myGoTo1 = myGoTo;
      this.$router.push(myGoTo)
    },
    created: function () {
    }
  }
</script>
<style>
  .more-wrap a{text-decoration: none;}
  .more-wrap+.tabbar-wrap{display: none;}
  #app .back-to{width: 25px;position: absolute;left: 10px; bottom: 7px;}
  .defaultAdd{color: #666;font-weight: normal;position: absolute;right: 10px;}
  .more-wrap .defaultAdd img{position: static;vertical-align: middle;}
  .bar-wrap{border-bottom: 1px solid rgb(227, 227, 227);;height: 7vh;width: 100%;text-align: center;line-height: 7vh;position: fixed;top: 9.2vh;z-index: 2;background-color: #f8f8f8;}
  .left-bar, .right-bar{float: left;width: 50%;color: #999;border-bottom: 2px solid transparent;}
  .myfix{width: 100%;height: 16.2vh;}
  .more-wrap .active{border-bottom: 2px solid #ccc;color: #222;}
  li{list-style-type: none;}
</style>
