<template>
  <div>
    <Myheader>
      <span>我的</span>
      <router-link :to="{name:'Edit',params:{myUrl:'/Mine'}}">
      <img src="../../assets/images/ic_settings.png"  alt="">
      </router-link>
    </Myheader>
    <Login></Login>
    <Remind></Remind>
    <MineList></MineList>
  </div>
</template>
<script>
  import Myheader from '../../components/Myheader'
  import Login from '../../components/Login'
  import Remind from '../../components/Remind'
  import MineList from '../../components/MineList'
  export default{
    data: function () {
      return {}
    },
    components:{
      Myheader,
      Login,
      Remind,
      MineList
    },
    props: []
  }
</script>
<style>
</style>
