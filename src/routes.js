import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';

import CoupPage from '@/pages/games/CoupPage';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/coup',
      name: 'CoupPage',
      component: CoupPage
    }
  ],
});

export default router;
