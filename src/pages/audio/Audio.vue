<template>
  <div>
    <Myheader>
      <span>书影音</span>
      <router-link :to="{name:'Logger',params:{myUrl:currentUrl}}">
      <img src="../../assets/images/ic_chat_green.png"  alt="" class="second-image">
      </router-link>
      <router-link :to="{name:'Search',params:{myUrl:currentUrl}}">
      <img src="../../assets/images/ic_actionbar_search_icon.png"  alt="" class="first-image">
      </router-link>
    </Myheader>
    <div class="audio-nav-wrap">
      <ul class="clearfix audio-nav">
        <li v-for="(item,index) in navArr"  @click="skip(index) " :class="{'audio-nav-acived':currentUrl==item.id}">
          <router-link :to="item.id">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import Myheader from '../../components/Myheader'
  export default{
    data: function () {
      return {
          navArr:[
            {id:'/Audio/Film',name:"电影",skipBol:true},
            {id:'/Audio/Book',name:"读书",skipBol:false},
            {id:'/Audio/TV',name:"电视",skipBol:false},
            {id:'/Audio/City',name:"同城",skipBol:false},
            {id:'/Audio/Music',name:"音乐",skipBol:false}
          ],
        currentUrl:'/Audio/Film'
      }
    },
    methods:{
      skip:function (arg) {
          for(var i=0;i<this.navArr.length;i++){
            this.navArr[i].skipBol=false;
          }
        this.navArr[arg].skipBol=true;
        this.currentUrl=this.navArr[arg].id;
        console.log(this.currentUrl)
        console.log(this.$route.path)
      }
    },
    components: {
      Myheader
    },
    props: [],
    mounted:function () {
      if(this.$route.path!='/audio'){
        this. currentUrl=  this.$route.path;
      }
    }
  }
</script>
<style>
  .clearfix:after{content:"200B";height:0;font-size:0;display:block;clear:both;}
  .audio-nav-wrap{height: 40px;background-color: #fff;width: 100%;}
  .audio-nav{border-bottom: 1px solid #f1f1f1;background-color: #fff;position: fixed;top: 68px;left: 0;width: 100%;
    z-index: 10;}
  .audio-nav li{width: 20%;line-height: 37px;height: 37px;text-align: center;font-size: 18px;float: left;list-style-type: none;border-bottom: 2px solid transparent;}
  .audio-nav li a{color: #a5a5a5;text-decoration: none;font-family: "华文细黑";display: inline-block;width: 100%;}
  .audio-nav .audio-nav-acived{border-color: #68cc78;}
  .audio-nav .audio-nav-acived a{color: #68cc78;}
</style>

