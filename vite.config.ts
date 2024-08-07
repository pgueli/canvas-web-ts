import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.86.66', // This will make the server accessible externally
    port: 4200, // You can change this to any port you prefer
  },
})
