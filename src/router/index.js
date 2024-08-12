import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProducts from "../views/AddProducts.vue";
import LoginPage from "../views/loginPage.vue";
import SignUp from "../views/SignUp.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add-products",
    name: "AddProducts",
    component: AddProducts,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  // After
  {
    path: "/LoginPage",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
