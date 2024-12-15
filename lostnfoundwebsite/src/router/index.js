import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import LostItems from "../pages/LostItems.vue";
import LostItemDetails from "../pages/LostItemDetails.vue";
import ReportLost from "@/pages/ReportLost.vue";
import MyPosts from "../pages/MyPosts.vue";
import FoundItems from "@/pages/FoundItems.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/lostItems",
    name: "LostItems",
    component: LostItems,
  },
  {
    path: "/lostitems/:id",
    name: LostItemDetails,
    component: LostItemDetails,
    props: true,
  },
  {
    path: "/reportLost",
    name: "ReportLost",
    component: ReportLost,
  },
  
  {
    path: "/myposts",
    name: "MyPosts",
    component: MyPosts,
  },
  {
    path: "/founditems",
    name: "FoundItems",
    component: FoundItems,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
