<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <v-card max-width="450" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in userCards">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
  import type { IUserCardWidgetProps } from './UserCardWidget.types'
  defineProps<IUserCardWidgetProps>()
</script>
