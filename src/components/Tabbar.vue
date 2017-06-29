<template>
    <div class="tabbar">
      <slot name="Item1"></slot>
      <slot name="Item2"></slot>
      <slot name="Item3"></slot>
      <slot name="Item4"></slot>
      <slot name="Item5"></slot>
    </div>
</template>
<script>
  export default{
    data: function () {
      return {}
    },
    methods: {},
    props: ['sel']
  }
</script>
<style>
.tabbar{height: 48px;width: 100%;position: fixed;bottom: 0;left: 0;border-top: 1px solid #e6e6e6;background-color: #f7f7f7;
  z-index: 10;}
</style>
