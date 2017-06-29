<template>
  <div class="tabbar-wrap">
    <Tabbar :sel="selected">
      <Item slot="Item1" msg="首页" @change="fn1" id="home">
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="activeImg">
      </Item>
      <Item slot="Item2" msg="书影音" @change="fn1" id="audio">
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="activeImg">
      </Item>
      <Item slot="Item3" msg="广播" @change="fn1" id="broadcast">
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="activeImg">
      </Item>
      <Item slot="Item4" msg="小组" @change="fn1" id="group">
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="activeImg">
      </Item>
      <Item slot="Item5" msg="我的" @change="fn1" id="mine">
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="normalImg">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="activeImg">
      </Item>
    </Tabbar>
  </div>
</template>
<script>
  import Tabbar from './Tabbar'
  import Item from './Item'
  export default{
    data: function () {
      return {
          selected:"home"
      }
    },
    methods: {
        fn1:function (val) {
          this.selected=val;
        }
    },
    components:{
      Tabbar,
      Item
    }
  }
</script>
<style>
.tabbar-wrap{}
</style>
