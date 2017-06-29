<template>
    <div>
      <ul>
        <li class="current-film" v-for="(item,index) in currentFilmArr">
          <img :src="item.movieUrl" alt="" class="left-img">
          <h3>{{item.FilmName}}</h3>
          <div>
            <div class="grade">
              <img  :src="judgeStar(index1,item.grade)" alt=""
                   v-for="(item1,index1) in arrImage" class="star-image">
              <span>{{ item.grade }}</span>
            </div>
            <p>{{ item.director }}</p>
            <p>主演：{{ item.actor }}</p>
            <p>{{ item.wantSee }}想看</p>
          </div>
          <div style="clear: both;"></div>
        </li>
      </ul>
    </div>
</template>
<script>
  export default{
    data: function () {
      return {
        arrImage: [0,1,2,3,4],
        currentFilmArr: [
          {
            movieUrl: require("../assets/images/010.jpg"),
            FilmName: "神奇女侠",
            grade: "8.0",
            director: '导演：艾利克斯',
            actor: '汤姆',
            wantSee: '26806'
          }, {
            movieUrl: require("../assets/images/011.jpg"),
            FilmName: "迷失Z城",
            grade: "评价人数不足",
            director: '导演：童江南',
            actor: '水原',
            wantSee: '175'
          }, {
            movieUrl: require("../assets/images/011.jpg"),
            FilmName: "迷失Z城",
            grade: "6",
            director: '导演：童江南',
            actor: '水原',
            wantSee: '175'
          }, {
            movieUrl: require("../assets/images/011.jpg"),
            FilmName: "迷失Z城",
            grade: "2",
            director: '导演：童江南',
            actor: '水原',
            wantSee: '175'
          }, {
            movieUrl: require("../assets/images/011.jpg"),
            FilmName: "迷失Z城",
            grade: "3.2",
            director: '导演：童江南',
            actor: '水原',
            wantSee: '175'
          }
        ]
      }
    },
    methods: {
      judgeStar:function (par,arg) {
        if (!isNaN(arg)) {
          if ((arg - 0) % 2 == 0) {
            if ((parseInt(par) + 1) * 2 - 1 < parseInt(arg)) {
              return require("../assets/images/rating_star_xsmall_on.png");
            } else {
              return require("../assets/images/rating_star_xsmall_off.png");
            }
          } else if ((arg - 0) % 2 == 1) {
            if ((parseInt(par) + 1) * 2 < parseInt(arg)) {
              return require("../assets/images/rating_star_xsmall_on.png");
            } else if (((parseInt(par) + 1) * 2 >= (arg - 0)) && (parseInt(par)  ) * 2 < (arg - 0)) {
              return require("../assets/images/rating_star_xsmall_half.png");
            } else {
              return require("../assets/images/rating_star_xsmall_off.png");
            }
          } else {
            if (parseInt(arg) % 2 == 0) {
              if ((parseInt(par) + 1) * 2 - 1 < parseInt(arg)) {
                return require("../assets/images/rating_star_xsmall_on.png");
              } else if (((parseInt(par) + 1) * 2 - 1 >= (arg - 0)) && (parseInt(par)  ) * 2 < (arg - 0)) {
                return require("../assets/images/rating_star_xsmall_half.png");
              } else {
                return require("../assets/images/rating_star_xsmall_off.png");
              }
            }
            else {
              if ((parseInt(par) + 1) * 2 - 1 <= parseInt(arg)) {
                return require("../assets/images/rating_star_xsmall_on.png");
              } else {
                return require("../assets/images/rating_star_xsmall_off.png");
              }
            }
          }
        }
        else {
          return require("../assets/images/rating_star_xsmall_off.png");
        }
      }
    },
    components: {},
    mounted:function () {
      console.log(isNaN('12'))
    }
  }
</script>
<style>
.current-film{margin-top: 5vh;padding-top: 10px;}
.current-film h3{font-weight: normal;padding-bottom: 10px;}
.left-img{width: 25vw;float: left;padding: 0 10px 10px;}
.star-image{width: 20px;vertical-align: middle;}
.grade span{vertical-align: -2px;color: #666;}
.current-film p{color: #666;line-height: 20px;font-size: 12px;}
.current-film p:nth-of-type(1){padding-top: 5px;}
.current-film p:nth-last-of-type(1){color: #333;}
</style>
