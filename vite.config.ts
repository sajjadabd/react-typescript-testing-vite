import { defineConfig } from 'vitest/config'
// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  server:{
    host : true ,
    strictPort : true,
    port: 5173
  }
})