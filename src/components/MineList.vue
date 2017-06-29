<template>
    <div>
      <router-link :to="{name:'Logger',params:{myUrl:'/Mine'}}">
      <ul class="mine-list clearfix">
        <li class="mine-item" v-for="(item,index) in mineArr">
          <img :src="item.iconImg" alt=""><br>
          <span>{{ item.iconCon }}</span>
        </li>
      </ul>
      </router-link>
    </div>
</template>
<script>
    export default{
        data: function () {
            return {
                mineArr:[
                  {
                      iconImg:require("../assets/images/ic_my_likes.png"),
                      iconCon:'喜欢'
                  },{
                    iconImg:require("../assets/images/ic_my_note.png"),
                    iconCon:'日记'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_album.png"),
                    iconCon:'相册'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_status.png"),
                    iconCon:'我的广播'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_movies_tvs.png"),
                    iconCon:'电影·电视'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_books.png"),
                    iconCon:'读书'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_music.png"),
                    iconCon:'音乐'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_events.png"),
                    iconCon:'同城活动'
                  },
                  {
                    iconImg:require("../assets/images/ic_ost_play.png"),
                    iconCon:'豆瓣时间'
                  },{
                    iconImg:require("../assets/images/ic_my_doulist.png"),
                    iconCon:'豆列'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_orders.png"),
                    iconCon:'订单'
                  },
                  {
                    iconImg:require("../assets/images/ic_my_wallet.png"),
                    iconCon:'钱包'
                  },
                ]
            }
        },
        methods: {},
        components: {}
    }
</script>
<style>
  .mine-list{background-color: #fff;text-align: center;margin-top: 16px;color: #2c3e50;}
  .mine-item{float: left;font-size: 16px;font-weight: bold;width: 25%;padding: 27px 0 24px;border-bottom: 2px solid #f8f8f8;line-height: 20px;list-style-type: none;}
  .mine-item img{width: 30px;}
</style>
