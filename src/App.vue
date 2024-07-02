<script setup lang="ts">
  import AppFooter
  from './components/AppFooter/AppFooter.vue'
  import VContentBlock from './components/VContentBlock/VContentBlock.vue'
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
      <VContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <AppFooter>
        <template #card-text
          >{{  new Date().getFullYear()  }} - Vuetify</template
        >
      </AppFooter>
    </v-footer>
  </v-app>
</template>
