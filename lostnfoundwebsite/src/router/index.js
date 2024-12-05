import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import LostItems from '../pages/LostItems.vue';
import ReportLost from '@/pages/ReportLost.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/lostitems',
    name: 'LostItems',
    component: LostItems,
  },
  {
    path: '/reportlost',
    name: 'ReportLost',
    component: ReportLost,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
