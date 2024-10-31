import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // Cambiado de '/site/' a '/'
  plugins: [react()],
})