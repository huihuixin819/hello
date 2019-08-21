<template>
  <div class="tabbaritem" @click="tiao">
    <div v-if="isActive">
      <slot name="itemicon_active"></slot>
    </div>
    <div v-else>
      <slot name="itemicon"></slot>
    </div>
    <div :class="isActive?'active':''">
      <slot name="itemtitle"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    path:{
      type:String,
      default:"/shouye"
    },
    acto:{
      type:String,
      default:"#000"
    }
  },
  data() {
    return {
     
    };
  },
  methods: {
      tiao(){
          this.$router.push(this.path)
      }
  },
  computed: {
    isActive(){
      // console.log(this.acto)
      return this.$route.path.indexOf(this.path)!=-1;
    }
  },
};
</script>
<style>
.tabbaritem img {
  width: 34px;
  height: 30px;
}
.tabbaritem {
  flex: 1;
  text-align: center;
  font-size: 10px;
}
.active{
  color:blue;
}
</style>