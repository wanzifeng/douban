<template>
    <div>
      <PublicList :filmTitle="BookTitleFirst" :arrFilm='BookFirst'></PublicList>
      <PublicList :filmTitle="BookTitleSecond" :arrFilm='BookSecond'></PublicList>
    </div>
</template>
<script>
  import PublicList from './PublicList'
  export default{
    data: function () {
      return {
          BookTitleFirst:"新书速递",
          BookTitleSecond:"最受关注的虚构类图书",
          BookFirst:[
            {
              movieUrl:require("../assets/images/030.jpg"),
              name:"外婆的道歉信",
              grade:"9.1"
            },{
              movieUrl:require("../assets/images/031.jpg"),
              name:'与火同行',
              grade:"9.7"
            },{
              movieUrl:require("../assets/images/032.jpg"),
              name:"封闭式车库 ",
              grade:"8.6"
            },{
              movieUrl:require("../assets/images/033.jpg"),
              name:"日本新中产阶级",
              grade:"9.0"
            }
          ],
        BookSecond:[
          {
            movieUrl:require("../assets/images/034.jpg"),
            name:"百鬼夜行 阳",
            grade:"8.1"
          },{
            movieUrl:require("../assets/images/035.jpg"),
            name:'恋情终结',
            grade:"8.3"
          },{
            movieUrl:require("../assets/images/036.jpg"),
            name:"新名字的故事 ",
            grade:"9.2"
          },{
            movieUrl:require("../assets/images/037.jpg"),
            name:"鱼王",
            grade:"9.2"
          }
        ]
      }
    },
    props: [],
    components: {
      PublicList
    }
  }
</script>
<style>
</style>
