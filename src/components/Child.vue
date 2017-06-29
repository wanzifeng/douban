<template>
  <div>
    <ul class="child">
      <li><a href='#' @click="changePage(1)" :class="currentPage==1?'disabled':''">首页</a></li>
      <li><a href='#' @click="changePage(currentPage-1)" :class="currentPage==1?'disabled':''">前一页</a></li>
      <li v-if="currentPage-3>0" @click="changePage(currentPage-3)"><a href='#' v-text='currentPage-3'></a></li>
      <li v-if="currentPage-2>0" @click="changePage(currentPage-2)"><a href='#' v-text='currentPage-2'></a></li>
      <li v-if="currentPage-1>0" @click="changePage(currentPage-1)"><a href='#' v-text='currentPage-1'></a></li>
      <li class="active"><a href='#' v-text='currentPage'></a></li>
      <li v-if="currentPage+1<=totalPage" @click="changePage(currentPage+1)"><a href='#' v-text='currentPage+1'></a>
      </li>
      <li v-if="currentPage+2<=totalPage" @click="changePage(currentPage+2)"><a href='#' v-text='currentPage+2'></a>
      </li>
      <li v-if="currentPage+3<=totalPage" @click="changePage(currentPage+3)"><a href='#' v-text='currentPage+3'></a>
      </li>
      <li><a href='#' @click="changePage(currentPage+1)" :class="currentPage==totalPage?'disabled':''">后一页</a></li>
      <li><a href='#' @click="changePage(totalPage)" :class="currentPage==totalPage?'disabled':''">尾页</a></li>
    </ul>
    <div>
      <small>
        当前第<span>{{　currentPage　}}</span>页,共有<span>{{ totalPage }}</span>页
      </small>
      <input type="number" v-model="text" :class="{err:bol}">
      <button @click="goToPage(text)" >Go</button>
    </div>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {
        currentPage: 1,
        totalPage: 100,
        text:"",
        bol:false
      }
    },
    props: ['myChange'],
    methods: {
      changePage: function (num) {
        if (num > 100 || num <= 0) {
          return
        }
        this.bol = false;
        this.currentPage = num;
        this.myChange(num);
        this.text="";
      },
      goToPage: function (arg) {
        if (parseInt(arg) > 100 || parseInt(arg) < 1 || !arg) {
          this.bol = true;
          return;
        }
        this.bol = false;
        this.text = "";
        this.currentPage = parseInt(arg)
      }
    }
  }
</script>
<style>
  .child {
    position: fixed;
    bottom: 300px;
    left: 50%;
  }
  .active{background-color: aqua;}
  .child .disabled{cursor: not-allowed;color: gray;}
  small{font-size: inherit;}
  .child li {
    list-style-type: none;
    float: left;
    padding: 5px 10px;
    border: 1px solid red;
    line-height: 30px;
    position: relative;
    left: -50%;
  }
  .child a {
    text-decoration: none;color: #1347ff;
  }
  .err{border: 1px solid red;}
</style>
