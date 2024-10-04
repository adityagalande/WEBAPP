import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // because of this any request hits using '/api' that time automatically apend 'http://localhost:3000' in front of it.
      // even if your vite app runs on different url (eg http://localhost:5123), but because of proxy server will think that request is coming from same origin (in this case http://localhost:3000)
      '/api': "http://localhost:3000" //when any request hits to api that time apend 'http://localhost:3000'
      // in deployment eg. on vercel put vercel url instead of 'http://localhost:3000' and CORS issue will resolved.
    },
  },
  plugins: [react()],
})
