<template>
  <div>
    <div v-for="(item,index) in bigArr">
       <div class="group-wrap">
            <div class="group-title">
              <img :src="item.groupTitleImgP" alt="">
              <h3>{{ item.groupTipP }}</h3>
            </div>
            <div class="group-contain" v-for="(item1,index1) in item.groupArrP">
              <div class="group-division">
                  <div class="module-title">{{ item1.itemName }}</div>
              </div>
              <div class="group-content" v-for="(item2,index2) in item1.itemArr">
                <div class="img-left">
                  <img :src="item2.groupContentImg" alt="">
                </div>
                  <h4>{{ item2.groupContentTitle }}</h4>
                <p>{{ item2.groupContent }}</p>
                <span class="people-num">{{ item2.groupPeopleNum }}人</span>
                <div class="img-right">
                  <img @click='chooseImage(index,index1,index2)'  :src="item2.groupBol?require('../assets/images/ic_group_check_anonymous.png'):require('../assets/images/ic_group_checked_anonymous.png')" alt="">
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>
<script>
    export default{
        props:['groupTitleImg','groupTip','groupArr','bigArr'],
        data: function () {
          return {
            isSelected:false
          }
        },
        methods: {//arg2:groupArr的index值
          chooseImage:function (arg1,arg2,arg3) {
            this.bigArr[arg1].groupArrP[arg2].itemArr[arg3].groupBol=!this.bigArr[arg1].groupArrP[arg2].itemArr[arg3].groupBol;
            var that=this;
            that.isSelected=false;
            this.bigArr.forEach(function (item) {
                item.groupArrP.forEach(function (item1) {
                  item1.itemArr.forEach(function (item2) {
                    if (!item2.groupBol) {
                      that.isSelected = true;
                    }
                  })
                })
            });
            console.log(this.isSelected);
            this.$emit('changBol',this.isSelected);
          }
        },
        components: {}
    }
</script>
<style>
.group-wrap{padding:18px 11px 0 ;background-color: #fff;}
.group-title{position: relative;height: 75px;width: 100%;}
.group-title img{width: 392px;}
.group-title h3{position: absolute;left: 12px;bottom: 3px;color: #fff;font-weight: normal;}
  .group-division{width: 100%;margin: 35px 0 14px;height: 2px;background-color: #f5f5f5;position: relative;}
  .group-division .module-title{position: absolute;width: 70px;left: 50%;margin-left:-35px;text-align: center; top: -11px;line-height: 22px;background-color: #fff;}
  .group-content{padding-left: 3px;padding-top: 14px ;padding-bottom: 18px;position: relative;}
.group-content h4{padding-top: 5px;line-height: 20px;font-size: 18px;color: #545454;}
.group-content p{padding-top:5px;color:#b9b9b9;line-height: 14px;font-size: 14px;width: 224px;max-height: 28px;  overflow: hidden;}
.group-content .img-left{float:left;margin-right: 10px;}
.group-content .img-left img{width: 50px;}
.group-content .img-right{position: absolute;right: 0;top: 26px;}
.group-content .img-right img{width: 25px;}
.group-content .people-num{position:absolute;right: 40px;color: #cfcfcf; font-size: 14px;top: 29px;}
</style>
