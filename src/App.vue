<template>
  <h3>属性函数attr()</h3>
  <a class="hover-tips btn-1" href="#0" data-msg="点击登录">登录</a>
  <!-- <a class="hover-tips btn-2" href="#0"></a> -->
  <h3>单位计算函数calc()</h3>
  <section class="ele-box">
    测试文字测试文字测试
    文字测试文字测试文字
    测试文字测试文字测试文字
    测试文字
  </section>
  <h3>条形加载条</h3>
  <ul class="custom-loading">
    <li v-for="(ele) in 6" :key="ele"></li>
  </ul>
  <h3>标签导航</h3>
</template>
<style lang="scss">
   @import "./styles/index.scss"; 
</style>
<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>
