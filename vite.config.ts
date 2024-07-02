import { defineConfig } from 'vite'
import * as pathNode from 'path'
import vue from '@vitejs/plugin-vue'

const SOURCE = './src'

/** Создать путь, используя корневую папку */
const createAliasPath = (path?: string) => {
  const correctPath = path ? `${SOURCE}/${path}` : SOURCE
  return pathNode.resolve(__dirname, correctPath)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': createAliasPath(),
      '@type': createAliasPath('types'),
      '@controller': createAliasPath('controllers'),
      '@component': createAliasPath('components'),
      '@widget': createAliasPath('widget'),
      '@userCardStore': createAliasPath('stores/userCard'),
      '@composable': createAliasPath('composables'),
    },
  },
})
