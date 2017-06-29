<template>
  <div>
    <PublicList :filmTitle="myFilmTitle" :arrFilm="myFilmArr" currentFilmUrl="/Audio/Film" toUrl="More" goToFilmUrl="/More/CurrentFilm">
    </PublicList>
    <MovieDes></MovieDes>
    <PublicList filmTitle="院线即将上映" :arrFilm="myFilmArr" currentFilmUrl="/Audio/Film" toUrl="More" goToFilmUrl="/More/ComingFilm"></PublicList>
  </div>
</template>
<script>
    import PublicList from './PublicList'
    import MovieDes from './MovieDes'
    import ComingMovie from './ComingMovie'
    export default{
        data: function () {
            return {
              myFilmTitle:"院线热映",
              myFilmArr:[
                {
                  movieUrl:require("../assets/images/010.jpg"),
                  name:"神奇女侠",
                  grade:"8.0",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/011.jpg"),
                  name:"迷失Z城",
                  grade:"7.1",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/012.jpg"),
                  name:"美好的意外",
                  grade:"暂无评论",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/013.jpg"),
                  name:"荡寇风云",
                  grade:"6.3",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/010.jpg"),
                  name:"神奇女侠",
                  grade:"8.0",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/011.jpg"),
                  name:"迷失Z城",
                  grade:"7.1",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/012.jpg"),
                  name:"美好的意外",
                  grade:"暂无评论",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/013.jpg"),
                  name:"荡寇风云",
                  grade:"6.3",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/010.jpg"),
                  name:"神奇女侠",
                  grade:"8.0",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/011.jpg"),
                  name:"迷失Z城",
                  grade:"7.1",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/012.jpg"),
                  name:"美好的意外",
                  grade:"暂无评论",
                  ticket:'',
                  sellDate:'',
                  author:''
                },{
                  movieUrl:require("../assets/images/013.jpg"),
                  name:"荡寇风云",
                  grade:"6.3",
                  ticket:'',
                  sellDate:'',
                  author:''
                }
              ]
            }
        },
      props: {

      },
      components:{
        PublicList,
        MovieDes,
        ComingMovie
      },
      mounted:function () {

      }
    }
</script>
<style>
</style>
