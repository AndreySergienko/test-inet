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
        <template v-for="(item, index) in userCards" :key="item.title + index">
          <v-list-subheader
            v-if="item.header"
            v-text="item.header"
          ></v-list-subheader>

          <v-divider v-else-if="item.divider" :inset="item.inset"></v-divider>

          <v-list-item v-else width="250">
            <v-list-item>
              <v-img :src="item.avatar"></v-img>
            </v-list-item>

            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item>
        </template>
      </transition-group>
    </v-list>

    <h3 class="text-center" v-else>User is not found</h3>
  </v-card>
</template>

<script setup lang="ts">
  import type { IUserCardWidgetProps } from './UserCardWidget.types'
  defineProps<IUserCardWidgetProps>()
</script>
