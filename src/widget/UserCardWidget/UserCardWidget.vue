<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-card max-width="950" class="mx-auto d-flex align-center" min-height="250">
    <v-progress-circular
      v-if="isLoading"
      class="mx-auto"
      color="primary"
      indeterminate
      width="3"
      size="70"
    ></v-progress-circular>

    <v-list v-else-if="userCards.length" class="d-flex">
      <transition-group name="fade">
        <template
          v-for="(item, index) in userCards"
          :key="item.title ? item.title : index"
        >
          <v-list-subheader v-if="item.header" v-text="item.header" />

          <v-divider v-else-if="item.divider" :inset="item.inset" />

          <v-list-item v-else width="250">
            <v-sheet v-if="keys[index]">
              <v-list-item-title v-if="item.address"
                >Address: {{ item.address }}</v-list-item-title
              >
            </v-sheet>

            <v-list-item @click="toggle(index)">
              <v-img
                v-if="item.address || !keys[index]"
                :src="item.avatar"
              ></v-img>
              <v-img
                v-else
                src="https://mur-mur.top/cat2/uploads/posts/2024-01/1705766764_mur-mur-top-p-pozdravleniya-s-dnem-rozhdeniya-ot-bomzhei-20.jpg"
              />
            </v-list-item>

            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item>
        </template>
      </transition-group>
    </v-list>

    <h3 class="mx-auto" v-else>User is not found</h3>
  </v-card>
</template>

<script setup lang="ts">
  import type { IUserCardWidgetProps } from './UserCardWidget.types'
  import { useToggleKeys } from '@composable/useToggleKeys'
  defineProps<IUserCardWidgetProps>()

  const { keys, toggle } = useToggleKeys()
</script>
