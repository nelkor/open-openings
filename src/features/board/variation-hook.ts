import { useRoute, useRouter } from 'vue-router'

import { getVariation, OpeningVariation } from '@/entities/openings'

export const useOpeningVariation = () => {
  const route = useRoute()
  const router = useRouter()

  const getOpeningVariation = (): OpeningVariation => {
    const { opening, variation } = route.params

    const openingVariation = getVariation(
      opening.toString(),
      variation.toString(),
    )

    if (!openingVariation) {
      router.replace({ name: 'main' })

      throw new Error('No such opening/variation')
    }

    return openingVariation
  }

  return { getOpeningVariation }
}
