<template>
  <div @click="fn" class="my-item">
    <span v-show="bol"><slot name="normalImg"></slot><br></span>
    <span v-show="!bol"><slot name="activeImg"></slot><br></span>
    <span :class="{'my-choice':!bol}">{{ msg }}</span>
  </div>
</template>
<script>
  export default{
    data: function () {
      return {}
    },
    props: [
      'msg',"id"
    ],
    computed: {
      bol: function () {
        if (this.id == this.$parent.sel) {
          return false;
        } else {
          return true;
        }
      }
    },
    methods: {
      fn: function () {
        this.$router.push("/"+this.id);
        this.$emit("change", this.id)
      }
    }
  }
</script>
<style>
  * {
    padding: 0;
    margin: 0;
  }
  .my-item {
    width: 20%;
    float: left;
    text-align: center;
    padding-top: 1px;
    font-size: 12px;
    line-height: 14px;
    color: #929292;
  }
  .my-item img {
    width: 28px;
  }
  .my-choice {
    color: #42bd56;
  }
</style>
