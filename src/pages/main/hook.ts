import { ref, watch, computed } from 'vue'

import { getVariationsList } from './lib/variations'
import { getPrefferedMode, setPrefferedMode } from './lib/mode'
import {
  getOpeningsList,
  getPrefferedOpening,
  setPrefferedOpening,
} from './lib/openings'

export const useMainPage = () => {
  const openingsList = getOpeningsList()
  const selectedMode = ref(getPrefferedMode())

  const selectedOpening = ref(
    getPrefferedOpening(openingsList.map(({ value }) => value)),
  )

  const variationsList = computed(() =>
    getVariationsList(selectedOpening.value, selectedMode.value),
  )

  const selectedVariation = ref(variationsList.value[0].value)

  const linkTo = computed(() =>
    [
      '',
      selectedMode.value,
      selectedOpening.value,
      selectedVariation.value,
    ].join('/'),
  )

  watch(selectedMode, setPrefferedMode)
  watch(selectedOpening, setPrefferedOpening)

  watch(variationsList, variations => {
    if (!variations.map(({ value }) => value).includes(selectedVariation.value))
      selectedVariation.value = variations[0].value
  })

  return {
    linkTo,
    openingsList,
    selectedMode,
    variationsList,
    selectedOpening,
    selectedVariation,
  }
}
