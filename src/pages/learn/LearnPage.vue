<script setup lang="ts">
import { TheChessboard } from 'vue3-chessboard'

import { useLearnPage } from './hook'

useLearnPage()
</script>

<template>
  <TheChessboard />
</template>
