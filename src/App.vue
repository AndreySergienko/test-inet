<script setup lang="ts">
  import AppFooter
  from './components/AppFooter/AppFooter.vue'
  import VContentBlock from './components/VContentBlock/VContentBlock.vue'
  import type { TLocalAttrsFooter } from '@type/vuetify.types'
  import { ref } from 'vue'

  const localAttrs = ref<TLocalAttrsFooter>({
        absolute: true,
        fixed: false
  })
</script>

<template>
  <v-app>
    <v-main>
      <VContentBlock />
    </v-main>

    <CardController />

    <v-footer app v-bind="localAttrs">
      <AppFooter>
        <template #card-text
          >{{  new Date().getFullYear()  }} - Vuetify</template
        >
      </AppFooter>
    </v-footer>
  </v-app>
</template>
