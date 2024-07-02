<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <slot name="img" />
      </v-col>

      <v-col cols="12" md="4">
        <slot
          name="actions"
          :countries="useCardFilterStore.countries"
          :scores="useCardFilterStore.scores"
          :filter="useCardFilterStore.activeFilter"
          :updateCountries="useCardFilterStore.updateCountries"
          :updateScores="useCardFilterStore.updateScores"
        />
      </v-col>

      <v-col cols="12" md="4">
        <slot name="card" :userCards="useCardStore.mutalableUserCards" />
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

  watch(useCardFilterStore.activeFilter, () => {
    useCardStore.filteredUserCards(useCardFilterStore.activeFilter, useCardFilterStore.filterValidators)
  })

  /** Имитируем получение данных с бэка
   * P.S возможно имеет смысл вынести в глобально
   */
  useCardFilterStore.fetchCountries()
  useCardFilterStore.fetchScores()
  useCardStore.fetchCard()
</script>
