import { createRouter, createWebHistory } from 'vue-router'

import { MainPage } from '@/pages/main'
import { LearnPage } from '@/pages/learn'
import { PracticePage } from '@/pages/practice'
import { resolveRoute } from '@/entities/openings'

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
      beforeEnter: to => {
        const { opening, variation } = to.params
        const resolved = resolveRoute(
          opening as string,
          variation as string,
          'learn',
        )

        if (!resolved) {
          return { name: 'root' }
        }
      },
    },
    {
      name: 'practice',
      component: PracticePage,
      path: '/practice/:opening/:variation',
      beforeEnter: to => {
        const { opening, variation } = to.params
        const resolved = resolveRoute(
          opening as string,
          variation as string,
          'practice',
        )

        if (!resolved) {
          return { name: 'root' }
        }
      },
    },

    // unfamiliar path
    {
      redirect: '/',
      path: '/:pathMatch(.*)*',
    },
  ],
})
