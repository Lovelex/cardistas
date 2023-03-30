import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';

import CoupPage from '@/pages/games/CoupPage';

import { auth } from '@/firebaseAuth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      beforeEnter(_path, _route, next) {
        if(!auth.currentUser) {
          next()
        } else {
          next({ name: 'HomePage' })
        }
      },
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      beforeEnter(_path, _route, next) {
        if(auth.currentUser) {
          next()
        } else {
          next({ name: 'LoginPage' })
        }
      },
      path: '/',
      name: 'HomePage',
      component: HomePage,
      children: [
        {
          path: '/coup',
          name: 'CoupPage',
          component: CoupPage
        }
      ]
    },
  ],
});

export default router;
