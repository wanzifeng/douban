<template>
  <div>
    <MyAddress></MyAddress>
    <PublicList :filmTitle="BookTitleFirst" :arrFilm='BookFirst'></PublicList>
    <PublicList :filmTitle="BookTitleSecond" :arrFilm='BookSecond'></PublicList>
  </div>
</template>
<script>
  import MyAddress from './MyAddress'
  import PublicList from './PublicList'
  export default{
    data: function () {
      return {
        BookTitleFirst:"热门活动",
        BookTitleSecond:"最受关注的虚构类图书",
        BookFirst:[
          {
            movieUrl:require("../assets/images/050.jpg"),
            name:"赖声川导演、郑佩佩主演舞台",
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-07-15'
          },{
            movieUrl:require("../assets/images/051.jpg"),
            name:'话剧《白鹿原》',
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-07-01'
          },{
            movieUrl:require("../assets/images/052.jpg"),
            name:"当爵士遇到古典——钢琴音乐 ",
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-08-04'
          },{
            movieUrl:require("../assets/images/053.jpg"),
            name:"布拉纳剧场现场放映作品《罗",
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-06-17'
          }
        ],
        BookSecond:[
          {
            movieUrl:require("../assets/images/054.jpg"),
            name:"2017《三体》3D多媒体舞台",
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-10-27'
          },{
            movieUrl:require("../assets/images/055.jpg"),
            name:'大学生戏剧节',
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-05-24'
          },{
            movieUrl:require("../assets/images/056.jpg"),
            name:"武汉站|爱乐汇·俄罗斯芭蕾舞",
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-06-06'
          },{
            movieUrl:require("../assets/images/053.jpg"),
            name:"布拉纳剧场现场放映作品《罗",
            grade:"",
            ticket:'官方售票',
            sellDate:'2017-06-17'
          }
        ]
      }
    },
    props: [],
    components: {
      PublicList,
      MyAddress
    }
  }
</script>
<style>

</style>
