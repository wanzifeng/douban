<template>
  <div>
    <Myheader>
      <span>广播</span>
      <router-link :to="{name:'Logger',params:{myUrl:'/Broadcast'}}">
        <img src="../../assets/images/ic_chat_green.png"  alt="" class="second-image">
      </router-link>
      <router-link :to="{name:'Search',params:{myUrl:'/Broadcast'}}">
        <img src="../../assets/images/ic_status_search_user.png" alt="" class="first-image">
      </router-link>
    </Myheader>
    <BroadcastTop :BroadcastTopC="broadcastTop" :BroadcastTopTC="broadcastTopTitle" :BroadcastTopTConC="broadcastTopCon"></BroadcastTop>
    <BroadcastList :broadcastArr="broadcastMainData"></BroadcastList>
    <ChangeBroadcast :chooseItem="broadItem" :chooseSkip="broadSkip" :greenBol='false'></ChangeBroadcast>
  </div>
</template>
<script>
  import Myheader from '../../components/Myheader'
  import BroadcastTop from '../../components/BroadcastTop'
  import BroadcastList from '../../components/BroadcastList'
  import ChangeBroadcast from '../../components/ChangeBroadcast'
  export default{
    data: function () {
      return {
        broadItem: "广播",
        broadSkip: '跳过',
        broadcastTop: require("../../assets/images/ic_status_anonymous_header.png"),
        broadcastTopTitle: '发现有趣的人',
        broadcastTopCon: '关注他们，发现更大的世界',
        broadcastMainData: [
          {
            broadcastAvatar: require('../../assets/images/101.jpg'),
            broadcastUser: '陆大鹏Hans',
            broadcastFocusNum: '7622',
            broadcastCon: '今天上午签的',
            broadcastConImg: require('../../assets/images/111.jpg'),
            broadcastLikeNum: "63",
            broadcastComNum: '12'
          }, {
            broadcastAvatar: require('../../assets/images/102.jpg'),
            broadcastUser: '独眼',
            broadcastFocusNum: '9009',
            broadcastCon: '有我......',
            broadcastConImg: require('../../assets/images/112.jpg'),
            broadcastLikeNum: "50",
            broadcastComNum: '23'
          }, {
            broadcastAvatar: require('../../assets/images/101.jpg'),
            broadcastUser: '陆大鹏Hans',
            broadcastFocusNum: '7622',
            broadcastCon: '今天上午签的',
            broadcastConImg: require('../../assets/images/111.jpg'),
            broadcastLikeNum: "63",
            broadcastComNum: '12'
          }
        ]
      }
    },
    components:{
      Myheader,
      BroadcastTop,
      BroadcastList,
      ChangeBroadcast
    },
    props: []
  }
</script>
<style>

</style>
