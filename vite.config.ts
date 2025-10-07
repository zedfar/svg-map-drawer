import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const mode = process.env.BUILD_MODE || "lib" // default lib

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: "dist-web",
    // lib: {
    //   entry: 'src/index.ts',
    //   name: 'SVGMap',
    //   fileName: (format) => `svg-map.bundle.${format}.js`,
    //   formats: ['umd'],
    // },
    rollupOptions: {
      external: [], // React ikut dibundle
    },
  },
  // define: {
  //   "process.env.NODE_ENV": JSON.stringify("production"),
  // },
  // build: {
  //   lib: {
  //     entry: 'src/index.ts',
  //     name: 'SVGMap',
  //     // beda nama file antara lib & bundle
  //     fileName: (format) =>
  //       mode === "app" ? `svg-map.bundle.${format}.js` : `svg-map.${format}.js`,
  //     formats: ['umd', 'es'],
  //   },
  //   rollupOptions: {
  //     // kalau app build → React ikut dibundle
  //     // kalau lib build → React di-exclude
  //     external: mode === "app" ? [] : ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM',
  //       },
  //     },
  //   },
  // },
})
