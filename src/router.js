import Vue from 'vue'
import Router from 'vue-router'
const geren = ()=>import("./views/geren/geren");
const shangping = ()=>import("./views/shangping/shangping");
const shouye = ()=>import("./views/shouye/shouye");
const wode = ()=>import("./views/wode/wode");

Vue.use(Router)

const router = new Router({
  routes:[
    {
      path:"/",redirect:"/geren"
    },
    {
      path:"/geren",component:geren
    },
    {
      path:"/shangping",component:shangping
    },
    {
      path:"/shouye",component:shouye
    },
    {
      path:"/wode",component:wode
    }

  ]
})

export default router
