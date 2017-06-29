<template>
  <div>
    <PublicList1 :filmTitle="top" :arrFilm1="topdes"></PublicList1>
    <PublicList :filmTitle="BookTitleFirst" :arrFilm='BookFirst'></PublicList>
    <PublicList :filmTitle="BookTitleSecond" :arrFilm='BookSecond'></PublicList>
  </div>
</template>
<script>
  import PublicList1 from './PublicList1'
  import PublicList from './PublicList'
  export default{
    data: function () {
      return {
          top:'今日更新',
          topdes:[
            {
              movieUrl: require("../assets/images/040.jpg"),
              name: "白鹿原",
              grade: "9.0",
              updateTo: "更新至42集/",
              updateTime: '每天更新/',
              updateType: '乐视视频',
              numWant: '13486'
            },
            {
              movieUrl: require("../assets/images/040.jpg"),
              name: "白鹿原",
              grade: "9.0",
              updateTo: "更新至42集/",
              updateTime: '每天更新/',
              updateType: '乐视视频',
              numWant: '13486'
            }
          ],
          BookTitleFirst:"近期值得看的国产剧",
        BookTitleSecond:"近期值得看的美剧",
        BookFirst:[
          {
            movieUrl:require("../assets/images/041.jpg"),
            name:"外婆的道歉信",
            grade:"9.1"
          },{
            movieUrl:require("../assets/images/042.jpg"),
            name:'与火同行',
            grade:"9.7"
          },{
            movieUrl:require("../assets/images/043.jpg"),
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
    components:{
      PublicList1,
      PublicList
    }
  }
</script>
<style>
</style>
