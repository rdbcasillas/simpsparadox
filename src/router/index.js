import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Surgeon from "../views/Surgeon.vue";
import LearningObjective from "../views/LearningObjective.vue";
import GraphViz1 from "../views/GraphViz1.vue";
import GraphViz2 from "../views/GraphViz2.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/objective",
      name: "objective",
      component: LearningObjective,
    },
    {
      path: "/graphviz1",
      name: "graphviz1",
      component: GraphViz1,
    },
    {
      path: "/graphviz2",
      name: "graphviz2",
      component: GraphViz2,
    },
    {
      path: "/surgeon",
      name: "surgeon",
      component: Surgeon,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
