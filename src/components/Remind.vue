<template>
    <div class="remind-wrap">
      <router-link :to="{name:'Logger',params:{myUrl:'/Mine'}}">
        <div class="remind-top">
          <img class="remind-l" src="../assets/images/ic_mine_notification.png" alt="">
          {{ remindCon }}
          <img class="remind-r" src="../assets/images/ic_arrow_gray_small.png" alt="">
        </div>
      </router-link>
      <div class="remind-bottom">
        {{ remindCont }}
      </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                remindCon:'提醒',
                remindCont:'暂无新提醒'
            }
        },
        methods: {},
        components: {}
    }
</script>
<style>
.remind-wrap{padding-left: 20px;margin-top: 15px;background-color: #fff;}
 .remind-top{border-bottom: 2px solid #f6f6f6;height: 53px;line-height: 53px;font-family: "Arial Narrow";font-size: 18px;font-weight: bold;}
.remind-wrap a{text-decoration: none;color:#2c3e50; }
  .remind-l{float: left;width: 24px;margin-top: 15px;margin-right:13px; }
.remind-r{float: right;width: 30px;margin-top: 10px;margin-right: 15px;}
  .remind-bottom{text-align: center;line-height: 45px;color: #d6d6d6;height: 45px;}
</style>
