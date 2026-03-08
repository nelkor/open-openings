import { useRoute } from 'vue-router'

import { resolveRoute, ResolvedRoute } from '@/entities/openings'

export const usePracticePage = (): ResolvedRoute => {
  const route = useRoute()

  const { opening, variation } = route.params

  const resolved = resolveRoute(
    opening as string,
    variation as string,
    'practice',
  )

  return resolved as ResolvedRoute
}
