<template>
      <div id="tabbar">
          <slot></slot>
      </div>
</template>
<style>
    #tabbar{
      display: flex;
      position: fixed;
      bottom: 0;
      left:0;
      right:0;
      height: 49px;
      box-shadow: 0px 0px 5px #ccc;
    }
</style>
<script>
export default {
    
}
</script>