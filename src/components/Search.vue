<template>
    <div class="my-search-wrap" @click="hiddenAll()">
      <div>
        <Myheader col="#42bd56" bor="none" cla="index-top">
          <div class="search-wrap">
            <div class="hidden-wrap-all">
              <div class="hidden-wrap">
                <span class="search-all" @click.stop="downList()">{{ arrList[currentIndex] }}<i><img :src="myFlag?require('../assets/images/ic_arrow_green_down.png'):require('../assets/images/ic_arrow_green_up.png')" alt=""></i></span>
                <input type="text" placeholder="搜索">
                <div style="clear: both;"></div>
              </div>
            </div>
            <ul class="choose-list" v-show="showList">
              <li :class="{'choose-item':true,'active-list':index==currentIndex}" v-for="(item,index) in arrList" @click="searchChange(index)">{{ item }}</li>
            </ul>
            <router-link :to="this.$route.params.myUrl">
              <span class="search-delete" >取消</span>
            </router-link>
          </div>
        </Myheader>
      </div>
      <p class="hot-search">热门搜索</p>
      <ul>
        <li class="s-list" v-for="(item,index) in searchArr">
          <span :class="{'ranking':true,'active-first':index==0,'active-second':index==1,'active-third':index==2}" >{{ index+1}}</span>
          <span class="s-content">{{item.name}}</span>
          <span class="s-type">{{item.form|myFilter}}</span>
        </li>
      </ul>
    </div>
</template>
<script>
  import Myheader from './Myheader'
    export default{
        data: function () {
            return {
              myFlag:true,
              searchArr:[
                {name:'神奇女侠',form:'电影'},
                {name:'新木乃伊',form:'电影'},
                {name:'异形：契约',form:'电影'},
                {name:'人类简史',form:'图书'},
                {name:'神奇女侠',form:'电影'},
                {name:'新木乃伊',form:'电影'},
                {name:'异形：契约',form:'电影'},
                {name:'人类简史',form:'图书'},
                {name:'神奇女侠',form:'电影'},
                {name:'新木乃伊',form:'电影'},
                {name:'异形：契约',form:'电影'},
                {name:'人类简史',form:'图书'},
                {name:'神奇女侠',form:'电影'},
                {name:'新木乃伊',form:'电影'},
                {name:'异形：契约',form:'电影'},
                {name:'人类简史',form:'图书'},
                {name:'神奇女侠',form:'电影'},
                {name:'新木乃伊',form:'电影'},
                {name:'异形：契约',form:'电影'},
                {name:'人类简史',form:'图书'}
              ],
              arrList:[
                  '全部','电影/电视','图书','唱片','用户','小组','群聊','游戏/应用','同城','舞台剧'
              ],
              currentIndex:0,
              showList:false
            }
        },
        filters:{
          myFilter:function (val) {
            return '· '+val
          }
        },
        methods: {
          downList:function () {
            this.myFlag=!this.myFlag;
            this.showList=!this.showList;
          },
          searchChange:function (arg) {
            this.currentIndex=arg;
            this.showList=false;
            this.myFlag=true;
          },
          hiddenAll:function () {
            this.showList=false;
          }
        },
        components: {
          Myheader
        }
    }
</script>
<style>
  .search-wrap{position: relative;padding-left: 12px;    background: rgb(66, 189, 86);width: 100%; margin-top: 8px;}
  .hidden-wrap{width: 500px;}
  .hidden-wrap-all{width: 340px;overflow: hidden;border-radius: 0 5px 5px 0 ;}
  .search-wrap .search-all,.search-delete{height: 28px;line-height: 28px;position: absolute;font-weight: normal; font-size: 16px;}
  .search-wrap .search-all{padding-left: 10px;border-right:1px solid #ccc;padding-right: 20px;position: static;  float: left;background-color: #fff;border-radius: 5px 0 0 5px ;}
  .search-wrap input{padding-left: 10px;max-width: 250px;float: left;margin-left: -12px;border-left: 1px solid #ccc;border-radius: 0 5px 5px 0 ;margin-right: 20px;}
  .search-wrap input:focus{color:rgb(66, 189, 86);}
  .search-wrap i{margin-left: 1px;}
  .search-wrap .search-all i img{position: static;}
  .search-wrap .search-delete{color: #fff;top: 0;right:29px;}
  .my-search-wrap+.tabbar-wrap{display: none;}
  .hot-search{line-height: 28px;padding-left: 20px;font-size: 16px;background-color: #f8f8f8;color: #ccc;}
  .s-list{height: 35px;vertical-align: middle;line-height: 35px;border-bottom: 1px solid #f8f8f8;background-color: #fff;}
  .s-list span{display: inline-block;vertical-align: middle;}
  .s-list .ranking{font-size: 12px;color: #ccc;width: 20px;height: 20px;margin-left: 10px;line-height: 20px;text-align: center;}
  .s-list .s-content{font-size: 18px;color: #000000;margin-left: 5px;}
  .s-list .s-type{font-size: 12px;color: #ccc;margin-left: 5px;}
  .s-list .active-first{color: #fff;background-image:url("../assets/images/ic_hottest_keyword.png");background-size: contain;}
  .s-list .active-second{color: #fff;background-image:url("../assets/images/ic_hot_keyword_second.png");background-size: contain;}
  .s-list .active-third{color: #fff;background-image:url("../assets/images/ic_hot_keyword_third.png");background-size: contain;}
  .choose-list{background-color: #fff;position: absolute;list-style-type: none;border-radius: 6px;border-top: 1px solid #ccc;border-left: 1px solid #ccc;border-right: 1px solid #ccc;}
  .choose-list li{padding-left: 15px;padding-right: 15px;border-bottom: 1px solid #ccc;font-weight: normal;}
  .choose-list .active-list{color:rgb(66, 189, 86);}
</style>
