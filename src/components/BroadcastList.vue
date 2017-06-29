<template>
  <div>
    <div class="broadcast-wrap" v-for="(item,index) in broadcastArr">
      <div class="avatar">
        <img :src="item.broadcastAvatar" alt="">
      </div>
      <div class="delete" @click="clearItem(index)">
        <img src="../assets/images/ic_close.png" alt="">
      </div>
      <div class="broadcast-list">
        <div class="broadcast-list-top">
          <h3 class="user-name">{{ item.broadcastUser }}</h3>
          <p class="focus-num">{{ item.broadcastFocusNum }}人关注</p>
          <span class="focus-in">关注</span>
        </div>
        <p class="content">{{ item.broadcastCon }}</p>
        <div class="content-img">
          <img :src="item.broadcastConImg" alt="">
        </div>
        <div class="broadcast-list-bottom">
          <img class="broadcast-like" src="../assets/images/ic_like_full.png" alt=""><span class="first-like">{{ item.broadcastLikeNum }}</span><img class="broadcast-comment" src="../assets/images/ic_group_comment_0.png" alt=""><span class="second-com">{{ item.broadcastComNum }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['broadcastArr'],
    data: function () {
      return {

      }
    },
    methods: {
      clearItem:function (arg) {
        this.broadcastArr.splice(arg,1);
      }
    },
    components: {}
  }
</script>
<style>
  .broadcast-wrap{width: 390px;background-color: #fff;margin:0  auto 12px;position: relative;border-radius: 5px;font-family: "Arial Narrow";box-shadow: 0 0 0 4px rgba(234,234,234,.4);}
  .broadcast-list{padding:26px 26px 22px 80px;background-color: #fff;}
  .broadcast-wrap .delete{position: absolute;right: 10px;top: 10px;}
  .broadcast-wrap .avatar{position: absolute;left: 15px;top: 18px;}
  .broadcast-wrap .avatar img{width: 50px;}
  .broadcast-wrap .delete img{width: 12px;}
  .broadcast-list .broadcast-like{width: 15px;position: absolute;left: 0;top: 1px;}
  .broadcast-list .broadcast-comment{width: 21px;position: absolute;left: 62px;top: -1px;}
  .broadcast-list-bottom{position: relative;}
  .broadcast-list .user-name{font-size: 20px;color:#3c3c3c; line-height: 17px;height:17px;}
  .broadcast-list .focus-num{font-size: 12px; color: #9b9b9b;line-height: 25px;height: 25px;padding-bottom: 4px;padding-top: 3px;}
  .broadcast-list-top{position: relative;}
  .broadcast-list-top .focus-in{top: 0;right: 0;position: absolute;margin-top: 3px;font-size: 18px;text-align: center;line-height: 28px;height: 28px;background-color: #42bd56;border-radius: 4px;color: #fff;padding:0 25px;}
  .broadcast-list .content{color: #222;line-height: 19px;font-size: 20px;}
  .broadcast-list .content-img{margin-top: 12px;}
    .broadcast-list .content-img img{width: 286px;}
  .broadcast-list-bottom{color:#d2d2d2;position: relative;margin-top: 13px;font-family: Arial;}
  .broadcast-list-bottom .first-like{position: absolute;left: 26px;}
  .broadcast-list-bottom .second-com{position: absolute;left: 89px;}
</style>
