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
      path: '/learn',
      component: LearnPage,
    },
    {
      name: 'practice',
      path: '/practice',
      component: PracticePage,
    },

    // unfamiliar path
    {
      redirect: '/',
      path: '/:pathMatch(.*)*',
    },
  ],
})
