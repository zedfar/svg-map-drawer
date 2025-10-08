import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// const mode = process.env.BUILD_MODE || "web" // default lib

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    // aktifkan hanya saat build & mode web
    ...(command === 'build'
      ? [
        viteStaticCopy({
          targets: [
            {
              src: 'public',
              dest: '.',
            },
          ],
        }),
      ]
      : []),
  ],
  build: {
    outDir: 'dist-web',
    rollupOptions: {
      external: [],
    },
  },
}))
