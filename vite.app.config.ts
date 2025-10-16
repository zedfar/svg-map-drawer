import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
    },
    publicDir: false,
    build: {
        outDir: "dist-app",
        minify: "esbuild",
        lib: {
            entry: 'src/index.ts',
            name: 'SVGMap',
            fileName: (format) => `svg-map.bundle.${format}.js`,
            formats: ['umd'],
        },
        rollupOptions: {
            external: [], // React ikut dibundle
        },
    },
})
