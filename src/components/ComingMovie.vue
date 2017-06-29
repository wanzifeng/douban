<template>
  <div class="movie-list">
    <h3>{{ filmTitle }}<span>更多></span></h3>
    <ul class="list-wrap">
      <li v-for="(item,index) in arrFilm">
        <img :src="item.movieUrl" alt="">
        <h4 class="movie-name">{{ item.name }}</h4>
        <div class="grade">
          <img v-if="parseInt(item.grade)" :src="judgeStar(index1,item.grade)" alt="" v-for="(item1,index1) in arrImage">
          <span>{{ item.grade }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        filmTitle:"院线即将上映",
        arrFilm:[
          {
            movieUrl:require("../assets/images/010.jpg"),
            name:"神奇女侠",
            grade:"8.0"
          },{
            movieUrl:require("../assets/images/011.jpg"),
            name:"迷失Z城",
            grade:"7.1"
          },{
            movieUrl:require("../assets/images/012.jpg"),
            name:"美好的意外",
            grade:"暂无评论"
          },{
            movieUrl:require("../assets/images/013.jpg"),
            name:"荡寇风云",
            grade:"6.3"
          }

        ],
        arrImage:[0,1,2,3,4]
      }
    },
    props:{
    },
    methods: {
      judgeStar:function (par,arg) {
        if ((arg - 0) % 2 ==0) {
          if ((parseInt(par) + 1) * 2 <= parseInt(arg)) {
            return require("../assets/images/rating_star_xsmall_on.png");
          } else {
            return require("../assets/images/rating_star_xsmall_off.png");
          }
        }else {
          if((parseInt(par) + 1) * 2 <= parseInt(arg)){
            return require("../assets/images/rating_star_xsmall_on.png");
          }else if(((parseInt(par) + 1) * 2 > (arg-0))&&(parseInt(par)  ) * 2 < (arg-0)){
            return require("../assets/images/rating_star_xsmall_half.png");

          }else{
            return require("../assets/images/rating_star_xsmall_off.png");
          }
        }
      }
    },
    components: {}
  }
</script>
<style>

</style>
