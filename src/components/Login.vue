<template>
    <div class="login">
      <router-link :to="{name:'Logger',params:{myUrl:'/Mine'}}">
        <div class="login-avatar">
          <img src="../assets/images/ic_user_male.png" alt="">
        </div>
      </router-link>
      <router-link :to="{name:'Logger',params:{myUrl:'/Mine'}}">
      <span class="login-btn">登录/注册</span>
      </router-link>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {}
        },
        methods: {},
        components: {}
    }
</script>
<style>
  .login{height: 130px;width:100%;background-color:#5cc76d;position: relative;}
.login .login-avatar img{width: 70px;position: absolute;left: 20px;top: 26px;}
  .login .login-btn{width: 178px;height: 37px;line-height: 37px;text-align: center;color: #fff;font-size: 16px;border:1px solid #fff;border-radius: 5px;position: absolute;left: 163px;top: 44px;}
</style>
