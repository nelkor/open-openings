import { useRoute } from 'vue-router'

import { resolveRoute, ResolvedRoute } from '@/entities/openings'

export const useLearnPage = (): ResolvedRoute => {
  const route = useRoute()

  const { opening, variation } = route.params

  const resolved = resolveRoute(opening as string, variation as string, 'learn')

  return resolved as ResolvedRoute
}
