import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);
export default new VueRouter({
 routes:  [
  {
    path: "/",
    redirect: "Map"

  },
  {
   path: "/Map",
    name: "Map",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/index.vue")  
      //指向文件
  },

]});

