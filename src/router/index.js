import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import produtsView from "../views/produtsView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produtsView",
    name: "produtsView",
    component: produtsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
