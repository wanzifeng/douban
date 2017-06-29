<template>
    <div class="group-top">
      <h3>{{ groupNum }}个小组等你来玩</h3>
      <p>立即选择加入吧</p>
      <span>根据你的兴趣推荐</span>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                groupNum:418853
            }
        },
        methods: {},
        components: {}
    }
</script>
<style>
.group-top{height: 176px;background-image: url("../assets/images/ic_group_banner.png");background-size: cover;font-family: "Arial Narrow";position: relative;text-align: center;  }
.group-top h3{padding-top: 67px;line-height:22px;height: 22px;font-size: 20px; color: #4d4d4d;}
.group-top p{line-height: 20px;font-size: 16px;color:#c3c3c3; }
  .group-top span{position: absolute;bottom: 0;left: 0;color: #bcbcbc;font-size: 14px;line-height: 14px;}
</style>
