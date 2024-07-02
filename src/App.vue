<script setup lang="ts">
  import AppFooter
  from '@component/AppFooter/AppFooter.vue'
  import type { TLocalAttrsFooter } from '@type/vuetify.types'
  import { ref } from 'vue'
  import UserCardController from '@controller/UserCardController/UserCardController.vue'
  import UserCardWidget from '@widget/UserCardWidget/UserCardWidget.vue'

  /** Настройки отображения футера */
  const localAttrs = ref<TLocalAttrsFooter>({
        absolute: true,
        fixed: false
  })
</script>

<template>
  <v-app>
    <v-main>
      <UserCardController>
        <template #img>
          <v-img src="assets/logo.svg" class="my-3" contain height="200"
        /></template>

        <template #actions="{ userCards }">
          <v-select
            :items="userCards"
            clearable
            label="Filter by country"
          ></v-select>

          <v-select
            :items="userCards"
            clearable
            label="Filter by score"
          ></v-select>
        </template>

        <template #card="{ userCards }">
          <UserCardWidget :userCards="userCards" />
        </template>
      </UserCardController>
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
