import { createRouter, createWebHistory } from 'vue-router'

import { MainPage } from '@/pages/main'
import { LearnPage } from '@/pages/learn'
import { PracticePage } from '@/pages/practice'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: MainPage,
    },
    {
      name: 'learn',
      component: LearnPage,
      path: '/learn/:opening/:variation',
    },
    {
      name: 'practice',
      component: PracticePage,
      path: '/practice/:opening/:variation',
    },

    // unfamiliar path
    {
      redirect: '/',
      path: '/:pathMatch(.*)*',
    },
  ],
})
