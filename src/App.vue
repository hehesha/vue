<template>
  <div id="app">
    <router-view></router-view>
    <div class="app_title">
      <a class="app_btn" href="#/sell">
        <i></i>
        <span>卖出</span>
      </a>
      <a class="app_btn" href="#/buy">
        <i></i>
        <span>购买</span>
      </a>
      <a class="app_btn" href="#/my">
        <i></i>
        <span>我的</span>
      </a>
    </div>
  </div>
</template>

<script>
import './css/common.css'
export default {}
</script>
<style lang="scss">
.app_head{
  display: flex;
}
.app_title{
    height: 100px;
    width: 100%;
    overflow: auto;
    display: flex;
    position: fixed;
    bottom: 0;
    
    a{  
        display: block;
        flex:1;
        float: left;
        border-right: 1px solid #ccc;
        text-align: center;
        font-size: 24px;
        line-height: 100px;
    }
}
</style>


