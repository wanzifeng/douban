<template>
    <div class="wrap-hot">
      <Hot></Hot>
      <div class="hot-detail clearfix" v-for="item in hotArr">
        <img :src="item.target.cover_url" alt="">
        <h2 >{{ item.title }}</h2>
        <p >{{ item.target.desc }}</p>
        <div class="division"></div>
        <div class="author-info">
          <span class="left">作者：{{ item.target.author.name }}</span>
          <span class="right" v-if="item.source_cn">{{ item.source_cn}}</span>
        </div>
      </div>
    </div>
</template>
<script>
    import Hot from './Hot'
    export default{
        props:['hotArr'],
        data: function () {
            return {

            }
        },
        methods: {},
        components: {
          Hot
        }
    }
</script>
<style>
  .clearfix:after{content:"200B";height:0;font-size:0;display:block;clear:both;}
  .wrap-hot{background-color: #FFF;width: 100vw;}
  .hot-detail{border-bottom:1px solid #f5f5f5 ;}
  .hot-detail h2{padding:16px 24px 9px  22px  ;font-weight: 600;color: #110808;;line-height: 24px;font-size: 18px;}
  .hot-detail p{padding-left: 22px;color: #cbcbcb;line-height: 18px;padding-top: 4px;font-size: 12px;padding-right: 24px;}
  .hot-detail img{width: 90px;padding:16px 24px 10px 20px ; float: right;}
  .hot-detail .author-info{padding-left: 22px;color: #cbcbcb;line-height: 33px;font-size: 12px;height: 33px;padding-bottom: 9px; padding-right: 24px;}
  .hot-detail .division{margin-left: 22px;width: 15px;background-color: #f2f2f2;height: 1px;margin-top: 8px;}
  .author-info .left{float: left;}
  .author-info .right{float: right;}
</style>
