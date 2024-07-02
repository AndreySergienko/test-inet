<script setup lang="ts">
  import AppFooter
  from '@component/AppFooter/AppFooter.vue'
  import type { TLocalAttrsFooter } from '@type/vuetify.types'
  import { shallowReactive } from 'vue'
  import UserCardController from '@controller/UserCardController/UserCardController.vue'
  import UserCardWidget from '@widget/UserCardWidget/UserCardWidget.vue'
  import logo from './assets/logo.svg'

  /** Настройки отображения футера */
  const localAttrs = shallowReactive<TLocalAttrsFooter>({
        absolute: true,
        fixed: false
  })
</script>

<template>
  <v-app>
    <v-main>
      <UserCardController>
        <template #img>
          <v-img :src="logo" class="my-3" contain height="200" />
        </template>

        <template
          #actions="{ countries, scores, updateCountries, updateScores, filter }"
        >
          <v-select
            :items="countries"
            clearable
            label="Filter by country"
            :model-value="filter.countrie"
            item-title="value"
            @update:model-value="updateCountries"
          ></v-select>

          <v-select
            :items="scores"
            clearable
            label="Filter by score"
            :model-value="filter.score"
            item-title="value"
            item-value="id"
            @update:model-value="updateScores"
          ></v-select>
        </template>

        <template #card="{ userCards, isLoading }">
          <UserCardWidget :userCards="userCards" :is-loading="isLoading" />
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
