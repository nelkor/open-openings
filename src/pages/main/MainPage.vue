<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, watch, computed } from 'vue'

import { openings } from '@/entities/openings'
import type { Opening } from '@/entities/openings/types'

interface Variation {
  name: string
}

type Move = Opening['tree']['replies'][string]

const isFinal = (move: Move): move is Move & { name: string } => {
  return 'name' in move
}

const findVariations = (tree: Opening['tree']): Variation[] => {
  const result: Variation[] = []

  const walk = (move: Move) => {
    if (isFinal(move)) {
      result.push({ name: move.name })

      return
    }

    for (const key of Object.keys(move.replies)) {
      walk(move.replies[key])
    }
  }

  for (const key of Object.keys(tree.replies)) {
    walk(tree.replies[key])
  }

  return result
}

const router = useRouter()

const selectedOpeningIndex = ref('')
const selectedVariation = ref('')
const selectedMode = ref('')

const selectedOpening = computed(() => {
  if (selectedOpeningIndex.value === '') return null

  return openings[Number(selectedOpeningIndex.value)] ?? null
})

const variations = computed(() => {
  if (!selectedOpening.value) return []

  return findVariations(selectedOpening.value.tree)
})

const canProceed = computed(() => {
  return (
    selectedOpening.value !== null &&
    selectedVariation.value !== '' &&
    selectedMode.value !== ''
  )
})

watch(selectedOpeningIndex, () => {
  selectedVariation.value = ''
})

const go = () => {
  if (!canProceed.value) return

  router.push(`/${selectedMode.value}`)
}
</script>

<template>
  <main>
    <section>
      <label for="opening-select">Opening</label>

      <select id="opening-select" v-model="selectedOpeningIndex">
        <option value="" disabled>Select an opening</option>

        <option
          v-for="(opening, index) in openings"
          :key="opening.name"
          :value="String(index)"
        >
          {{ opening.name }}
        </option>
      </select>
    </section>

    <section>
      <label for="variation-select">Variation</label>

      <select
        id="variation-select"
        v-model="selectedVariation"
        :disabled="!selectedOpening"
      >
        <option value="" disabled>Select a variation</option>

        <option
          v-for="variation in variations"
          :key="variation.name"
          :value="variation.name"
        >
          {{ variation.name }}
        </option>
      </select>
    </section>

    <section>
      <label>Mode</label>

      <label>
        <input v-model="selectedMode" type="radio" name="mode" value="learn" />
        Learn
      </label>

      <label>
        <input
          v-model="selectedMode"
          type="radio"
          name="mode"
          value="practice"
        />
        Practice
      </label>
    </section>

    <button :disabled="!canProceed" @click="go">Start</button>
  </main>
</template>
