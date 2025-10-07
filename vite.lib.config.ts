import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
    },
    resolve: {
        dedupe: ['react', 'react-dom']
    },
    build: {
        outDir: "dist",
        lib: {
            entry: 'src/index.ts',
            name: 'SVGMap',
            fileName: (format) => `svg-map.${format}.js`,
            formats: ['umd', 'es'],
        },

        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime',
                "lucide-react"
            ], // React di-exclude
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    "lucide-react": "LucideReact",
                },
            },

        },
    },
})
