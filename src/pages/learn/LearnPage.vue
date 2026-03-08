<script setup lang="ts">
import { TheChessboard } from 'vue3-chessboard'

import { useLearnPage } from './hook'

const { openingName, variationName } = useLearnPage()
</script>

<template>
  <h1>{{ openingName }}</h1>
  <h2>{{ variationName }}</h2>

  <TheChessboard />

  <router-link to="/">Back to main</router-link>
</template>
