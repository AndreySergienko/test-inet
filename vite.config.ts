import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from 'node:url'

const SOURCE = './src'

/** Создать путь, используя корневую папку */
const createAliasPath = (path?: string): string => {
  const correctPath = path ? `${SOURCE}/${path}` : SOURCE
  return fileURLToPath(new URL(correctPath, import.meta.url))
}

/** Создать элиас */
const createAlias = (key: string, path?: string): Record<string, string> => {
  return {
    [`@${key}`]: path ? createAliasPath(path) : createAliasPath(key),
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': createAliasPath(),
      ...createAlias('types'),
      ...createAlias('controllers'),
      ...createAlias('components'),
    },
  },
})
