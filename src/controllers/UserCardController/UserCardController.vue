<template>
  <v-container height="100vh">
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <slot name="img" />
      </v-col>

      <v-col cols="12">
        <slot
          name="actions"
          :countries="useCardFilterStore.countries"
          :scores="useCardFilterStore.scores"
          :filter="useCardFilterStore.activeFilter"
          :updateCountries="useCardFilterStore.updateCountries"
          :updateScores="useCardFilterStore.updateScores"
        />
      </v-col>

      <v-col>
        <slot
          name="card"
          :userCards="useCardStore.mutalableUserCards"
          :is-loading="useCardStore.isLoading"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { watch } from 'vue'
  import type { IUserCardControllerSlots } from './UserCardController.types'
  import { useUserCardStore } from '@userCardStore/user-card'
  import { useUserCardFilterStore } from '@userCardStore/user-card-filter'

  defineSlots<IUserCardControllerSlots>()

  const useCardStore = useUserCardStore()
  const useCardFilterStore = useUserCardFilterStore()

  /** Связывает обновления данных активного фильтра и фильтрацию массива */
  watch(useCardFilterStore.activeFilter, async () => {
    await useCardStore.filteredUserCards(useCardFilterStore.activeFilter, useCardFilterStore.filterValidators)
  })

  /** Имитируем получение данных с бэка
   * P.S ситуативно - имеет смысл вынести глобально
   */
  useCardFilterStore.fetchCountries()
  useCardFilterStore.fetchScores()
  useCardStore.fetchCard()
</script>
