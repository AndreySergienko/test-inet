<script setup lang="ts">
  import { computed } from 'vue'

    const localAttrs = computed(() => {
      return {
        absolute: true,
        fixed: false
      }
    })
</script>

<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>
