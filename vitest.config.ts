import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue']
    }),
    Components({
      dirs: ['components']
    })
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './')
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    server: {
      deps: {
        inline: ['vuetify']
      }
    }
  }
})
