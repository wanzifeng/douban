<template>
    <div class="logger-wrap">
      <router-link :to="{path:this.$route.params.myUrl}" >
        <span class="l-delete"><img src="../assets/images/ic_close.png" alt=""></span>
      </router-link>
      <div class="logger-main">
        <h3>欢迎来到豆瓣</h3>
        <form action="">
          <input type="text" placeholder="手机号/邮箱"><br>
          <input type="text" placeholder="密码" class="pass-word"><br>
          <button type="submit" class="logger-in">登录</button><br>
          <div class="register-wrap"><span class="register">注册豆瓣</span><span class="forget">忘记密码</span></div>
        </form>
      </div>
      <div class="logger-type-wrap">
        <div class="logger-blog">
          <img src="../assets/images/ic_weibo.png" alt="">
          <span class="blog-in">微博登录</span>
        </div>
        <div class="logger-wechat">
          <img src="../assets/images/ic_wechat.png" alt="">
          <span class="wechat-in">微信登录</span>
        </div>
        <div class="l-division"></div>
      </div>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {}
        },
        methods: {
          fn:function () {
              console.log(2)
            console.log(this.$route.params.myUrl)
          }
        },
        components: {}
    }
</script>
<style>
  .logger-wrap+.tabbar-wrap{display: none;}
  .logger-wrap{width: 100vw;height: 100vh;background-color: #fff;position: fixed;color: #bdbdbd ;left: 0;bottom: 0;}
  .l-delete{position: absolute;left: 10px;top:20px; }
  .l-delete img{width: 20px;}
  .logger-main{padding-top: 10vh;text-align: center;}
  .logger-main h3{font-size:40px;line-height: 20vh;font-weight: normal;color: #42BD56;text-align: center;}
  .logger-main input{width: 85vw;display: inline-block;height: 5vh;border:1px solid #ccc;padding-left: 4vw;outline: none;}
  .logger-main button{display: inline-block;margin-top: 10px;border: none;outline: none;}
  .logger-in{width: 90vw;height: 5vh;line-height: 5vh;font-size: 20px;background-color: #42BD56;color: #fff;}
  .pass-word{margin-top: -2px;}
  .register-wrap{margin-top: 10px;}
  .register{padding-right: 20px;border-right: 1px solid #ccc;color: #42BD56;}
  .forget{padding-left: 20px;}
  .logger-type-wrap{position: fixed;bottom:20px;left: 0;height: 4vh;line-height:4vh;font-size: 16px;}
  .logger-blog,.logger-wechat{float: left;width: 50vw;text-align: center;}

  .l-division{width: 1px;height:16px;background-color: #ccc;position: absolute;left: 50%;top: 7px; }
.logger-type-wrap img{width: 20px;vertical-align: middle;}
  input:focus{color: #42BD56;}
</style>
