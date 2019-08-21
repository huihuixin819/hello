<template>
  <div id="app">
    <tabbar>
      <tabbaritem path="/geren">
        <img src="./assets/imgs/tabbar/1_01.png" alt slot="itemicon" />
        <img src="./assets/imgs/tabbar/1_02.png" alt slot="itemicon_active" />
        <div slot="itemtitle">个人</div>
      </tabbaritem>
      <tabbaritem path="/shangping">
        <img src="./assets/imgs/tabbar/1_03.png" alt slot="itemicon" />
        <img src="./assets/imgs/tabbar/1_04.png" slot="itemicon_active" />
        <div slot="itemtitle">商品</div>
      </tabbaritem>
      <tabbaritem path="/shouye">
        <img src="./assets/imgs/tabbar/1_03.png" alt slot="itemicon" />
        <img src="./assets/imgs/tabbar/1_04.png" slot="itemicon_active" />
        <div slot="itemtitle">首页</div>
      </tabbaritem>
      <tabbaritem path="/wode">
        <img src="./assets/imgs/tabbar/1_08.png" alt slot="itemicon" />
        <img src="./assets/imgs/tabbar/1_09.png" alt slot="itemicon_active" />
        <div slot="itemtitle">我的</div>
      </tabbaritem>
    </tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import basecss from "./assets/css/base.css"; //或者
// require("./assets/css/base.css")  引用公共的样式
import tabbar from "./components/tabbar/tabbar";
import tabbaritem from "./components/tabbar/tabbaritem";

export default {
  components: {
    tabbar,
    tabbaritem
  }
};
</script>
<style>
</style>