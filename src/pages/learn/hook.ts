import { useOpeningVariation } from '@/features/board'

export const useLearnPage = () => {
  const { getOpeningVariation } = useOpeningVariation()

  const variation = getOpeningVariation()

  console.log(variation)
}
