<template>
    <div class="edit-wrap">
      <Myheader>
        <span>设置</span>
        <router-link :to="this.$route.params.myUrl">
          <img src="../assets/images/ic_bar_back_green.png"  alt="" class="back-to">
        </router-link>
      </Myheader>
      <div class="edit-top">
        <p class="p-top">推送<img src="../assets/images/ic_arrow_gray_small.png" alt="" class="arrow-right"></p>
        <p>兴趣标签<img src="../assets/images/ic_arrow_gray_small.png" alt=""class="arrow-right"></p>
      </div>
      <div class="edit-top">
        <p>清理存储空间 <img src="../assets/images/ic_arrow_gray_small.png" alt=""class="arrow-right"><span class="e-num">10.11m</span></p>
      </div>
      <div class="edit-top">
        <p class="p-top">帮助与反馈<img src="../assets/images/ic_arrow_gray_small.png" alt="" class="arrow-right"><img src="../assets/images/ic_feedback.png" alt="" class="arrow-right-help"></p>
        <p>网络诊断<img src="../assets/images/ic_arrow_gray_small.png" alt=""class="arrow-right"></p>
      </div>
      <div class="edit-top">
        <p class="p-top">给应用评分<img src="../assets/images/ic_arrow_gray_small.png" alt="" class="arrow-right"></p>
        <p class="p-top">新功能介绍<img src="../assets/images/ic_arrow_gray_small.png" alt=""class="arrow-right"></p>
        <p>关于<img src="../assets/images/ic_arrow_gray_small.png" alt=""class="arrow-right"></p>
      </div>
    </div>
</template>
<script>
  import Myheader from './Myheader'
    export default{
        data: function () {
            return {}
        },
        methods: {},
        components: {
          Myheader
        }
    }
</script>
<style>
  .edit-wrap+.tabbar-wrap{display: none;}
  .edit-wrap{width: 100vw;height: 100vh;position: fixed;left: 0;top: 0;background-color: #f7f7f7;}
  .back-to{width: 25px;position: absolute;left: 10px;}
  .edit-top{line-height: 6vh;padding-left: 5vw;background-color: #fff;margin-top: 6vh;border-top: 1px solid #E3E3E3;border-bottom: 1px solid #E3E3E3;}
  .arrow-right-help{width: 20px;float: right;margin-top: 13px; }
  .arrow-right{width: 30px;float: right;margin-top: 7px;}
  .p-top{border-bottom: 1px solid #E3E3E3; }
  .e-num{float: right;color: #999;}
</style>
