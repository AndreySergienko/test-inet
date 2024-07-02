<template>
  <v-card flat tile width="100%" class="red lighten-1 text-center">
    <v-divider></v-divider>

    <v-card-text class="white--text">
      <slot name="card-text" />
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import type { IAppFooterSlots } from './AppFooter.types'
  defineSlots<IAppFooterSlots>()
</script>
