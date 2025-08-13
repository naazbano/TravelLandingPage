import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @import url('https://fonts.googleapis.com/css2?family=Volkhov:wght@400;700&display=swap');


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
      tailwindcss(),
  ],
    
})
