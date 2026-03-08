<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { TheChessboard } from 'vue3-chessboard'

import { openings, findVariations } from '@/entities/openings'

const router = useRouter()
const route = useRoute()

const openingName = decodeURIComponent(route.params.opening as string)
const variationName = decodeURIComponent(route.params.variation as string)

const opening = openings.find((o) => o.name === openingName) ?? null

const variation = opening
  ? (findVariations(opening.tree).find((v) => v.name === variationName) ?? null)
  : null

onMounted(() => {
  if (!opening || !variation) {
    router.replace('/')
  }
})
</script>

<template>
  <main v-if="opening && variation">
    <RouterLink to="/">← Back to main</RouterLink>

    <h1>{{ opening.name }}</h1>
    <h2>{{ variation.name }}</h2>

    <TheChessboard />
  </main>
</template>
