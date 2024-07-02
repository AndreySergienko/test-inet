<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <slot name="img" />
      </v-col>

      <v-col cols="12" md="4">
        <slot name="actions" :userCards="useCardStore.userCard" />
      </v-col>

      <v-col cols="12" md="4">
        <slot name="card" :userCards="useCardStore.userCard" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { IUserCardControllerSlots } from './UserCardController.types'
  import { useUserCardStore } from '@/stores/userCard/user-card'

  defineSlots<IUserCardControllerSlots>()

  const useCardStore = useUserCardStore()
</script>
