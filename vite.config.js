import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        news: path.resolve(__dirname, 'News-Center.html'),
        media: path.resolve(__dirname, 'Media-Center.html'),
        time: path.resolve(__dirname, 'Time-Corridor.html'),
        about: path.resolve(__dirname, 'About-Us.html'),
      }
    }
  }
})


