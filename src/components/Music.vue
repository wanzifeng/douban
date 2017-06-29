<template>
  <div>
    <PublicList :filmTitle="BookTitleFirst" :arrFilm='BookFirst'></PublicList>
    <PublicList :filmTitle="BookTitleSecond" :arrFilm='BookSecond'></PublicList>
    <PublicList :filmTitle="BookTitleThird" :arrFilm='BookFirst'></PublicList>
  </div>
</template>
<script>
  import PublicList1 from './PublicList1'
  import PublicList from './PublicList'
  export default{
    data: function () {
      return {
        BookTitleFirst:"华语新碟榜",
        BookTitleSecond:"欧美新碟榜",
        BookTitleThird:"日韩新碟榜",
        BookFirst:[
          {
            movieUrl:require("../assets/images/060.jpg"),
            name:"猎户星座",
            grade:"8.2",
            author:'朴树'
          },{
            movieUrl:require("../assets/images/061.jpg"),
            name:'放&披风',
            grade:"5",
            author:'陈奕迅'
          },{
            movieUrl:require("../assets/images/062.jpg"),
            name:"李志、电声 ",
            grade:"8.6",
            author:'李志'
          },{
            movieUrl:require("../assets/images/063.jpg"),
            name:"来日方长",
            grade:"7.6",
            author:'黄龄'
          }
        ],
        BookSecond:[
          {
            movieUrl:require("../assets/images/064.jpg"),
            name:"One More",
            grade:"6.0",
            author:'Linkin Park'
          },{
            movieUrl:require("../assets/images/065.jpg"),
            name:'Cigarettes',
            grade:"8.7",
            author:'Cigarettes'
          },{
            movieUrl:require("../assets/images/066.jpg"),
            name:"Harry  ",
            grade:"7.4",
            author:'Harry Styles'
          },{
            movieUrl:require("../assets/images/067.jpg"),
            name:"Guardians",
            grade:"8.5",
            author:'Various Artists'
          }
        ]
      }
    },
    props: [],
    components:{
      PublicList1,
      PublicList
    }
  }
</script>
<style>
</style>
