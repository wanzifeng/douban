<template>
    <div class="change-broadcast">
      <span class="change-another"><img src="../assets/images/ic_reshare_flag.png" alt="">换一批</span>
      <span :class="{'b-choice':true,green:greenBol}" :style="{left: chooseSkip==''?'230px':'181px'}">选好了，去玩{{ chooseItem }}</span>
      <router-link :to="{name:'Logger',params:{myUrl:'/Broadcast'}}">
        <span class="b-skip" v-if="chooseSkip">{{ chooseSkip }}</span>
      </router-link>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {}
        },
        methods: {},
        components: {},
      props:['chooseItem','chooseSkip','greenBol']
    }
</script>
<style>
.change-broadcast{height: 50px;line-height: 50px;vertical-align: middle;position: fixed;bottom: 48px;left: 0;background-color: #fff;z-index: 2;width: 100%;font-size: 16px;padding-top: 2px;box-shadow: 0 -2px 0 2px rgba(234,234,234,.6);}
.change-broadcast img{width: 20px;position:absolute;top: 15px;left: -25px;}
.change-broadcast .b-choice{position: absolute;left: 181px;padding: 7px 18px;background-color: #dfdfdf;color: #f9f9f9;line-height: 15px;border-radius: 5px;top: 12px;}
.change-broadcast .change-another{position: absolute;left: 39px;color: #7ad088;}
.change-broadcast .b-skip{position: absolute;right: 20px;color: #b4b4b4;}
.change-broadcast .green{background-color:#7ad088;}
</style>
