<template>
  <div>
    <Myheader>
       <span>小组</span>
      <router-link :to="{name:'Search',params:{myUrl:'/Group'}}">
        <img src="../../assets/images/ic_chat_green.png" alt="" class="second-image">
      </router-link>
      <router-link :to="{name:'Logger',params:{myUrl:'/Group'}}">
        <img src="../../assets/images/ic_actionbar_search_icon.png" alt="" class="first-image">
      </router-link>
    </Myheader>
    <GroupTop></GroupTop>
      <GroupTitle :bigArr="bigArr" @changBol="green"></GroupTitle>
    <ChangeBroadcast :chooseItem="broadItem" :chooseSkip="broadSkip" :greenBol="greenBol1"></ChangeBroadcast>
  </div>
</template>
<script>
  import Myheader from '../../components/Myheader'
  import GroupTop from '../../components/GroupTop'
  import GroupTitle from '../../components/GroupTitle'
  import ChangeBroadcast from '../../components/ChangeBroadcast'
  export default{
    data: function () {
      return {
        greenBol1:false,
        broadItem:"小组",
        broadSkip:'',
        bigArr:[{
          groupTitleImgP: require('../../assets/images/ic_rec_group_banner_4.png'),
          groupTipP: '会生活',
          groupArrP: [
            {
              itemName:'旅行',
              itemArr:[
                {
                  groupContentImg:require('../../assets/images/201.jpg'),
                  groupContentTitle:"沙发客的客",
                  groupContent:'沙发客，是一种文化',
                  groupPeopleNum:"5473",
                  groupBol:true
                },
                {
                  groupContentImg:require('../../assets/images/202.jpg'),
                  groupContentTitle:"我要去台湾",
                  groupContent:'去台湾，是我的梦想，',
                  groupPeopleNum:"66600",
                  groupBol:true
                },
                {
                  groupContentImg:require('../../assets/images/203.jpg'),
                  groupContentTitle:"一起去旅行",
                  groupContent:'为什么要登山，因为山在那',
                  groupPeopleNum:"637610",
                  groupBol:true
                }
              ]
            }
          ]
        },{
          groupTitleImgP: require('../../assets/images/ic_rec_group_banner_6.png'),
          groupTipP: '精品推荐',
          groupArrP: [
            {
              itemName:'影视',
              itemArr:[
                {
                  groupContentImg:require('../../assets/images/204.jpg'),
                  groupContentTitle:"Grey's Anatomy",
                  groupContent:'金球奖最佳剧情类电视剧！',
                  groupPeopleNum:"22446",
                  groupBol:true
                },
                {
                  groupContentImg:require('../../assets/images/205.jpg'),
                  groupContentTitle:"心理学书籍",
                  groupContent:'每看完一本书，总会心有体会',
                  groupPeopleNum:"108276 ",
                  groupBol:true
                },
                {
                  groupContentImg:require('../../assets/images/206.jpg'),
                  groupContentTitle:"影像中的正义",
                  groupContent:'电影是第七艺术',
                  groupPeopleNum:"8871",
                  groupBol:true
                }
              ]
            },
            {
              itemName:'读书',
              itemArr:[
                {
                  groupContentImg:require('../../assets/images/207.jpg'),
                  groupContentTitle:"外国文学",
                  groupContent:'英美文学、法国文学',
                  groupPeopleNum:"83428",
                  groupBol:true
                },
                {
                  groupContentImg:require('../../assets/images/208.jpg'),
                  groupContentTitle:"我们一起读书",
                  groupContent:'看电视和上网给人以热闹假象',
                  groupPeopleNum:"674443",
                  groupBol:true
                },
                {
                  groupContentImg:require('../../assets/images/209.jpg'),
                  groupContentTitle:"柯南迷",
                  groupContent:'喜欢柯南咩？',
                  groupPeopleNum:"7074",
                  groupBol:true
                }
              ]
            }
          ]
        }],
      }
    },
    components:{
      Myheader,
      GroupTop,
      GroupTitle,
      ChangeBroadcast
    },
    props: [],
    methods:{
      green:function (val) {
        this.greenBol1=val;
        console.log(val);
      }
    }
  }
</script>
<style>
</style>
