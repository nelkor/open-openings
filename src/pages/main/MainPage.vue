<script setup lang="ts">
import { useMainPage } from './hook'

const {
  linkTo,
  openingsList,
  selectedMode,
  variationsList,
  selectedOpening,
  selectedVariation,
} = useMainPage()
</script>

<template>
  <label>
    Opening

    <select v-model="selectedOpening" name="opening-select">
      <option
        v-for="opening in openingsList"
        :key="opening.value"
        :value="opening.value"
      >
        {{ opening.name }}
      </option>
    </select>
  </label>

  <label>
    Variation

    <select v-model="selectedVariation" name="variation-select">
      <option
        v-for="variation in variationsList"
        :key="variation.value"
        :value="variation.value"
      >
        {{ variation.name }}
      </option>
    </select>
  </label>

  <fieldset>
    <legend>Mode</legend>

    <label>
      <input v-model="selectedMode" type="radio" name="mode" value="learn" />

      Learn
    </label>

    <label>
      <input v-model="selectedMode" type="radio" name="mode" value="practice" />

      Practice
    </label>
  </fieldset>

  <router-link :to="linkTo">Start</router-link>
</template>
