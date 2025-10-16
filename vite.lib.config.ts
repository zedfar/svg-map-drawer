import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import fs from 'fs';
import type { OutputOptions, OutputBundle } from 'rollup';


function removePublicHtmlPlugin() {
    return {
        name: 'remove-public-html',
        // Hook ini dijalankan setelah bundle selesai ditulis ke disk
        writeBundle(options: OutputOptions, bundle: OutputBundle) {
            const outDir = options.dir;
            if (!outDir) return;

            // Dapatkan semua file di folder output
            const files = fs.readdirSync(outDir);

            // Hapus setiap file yang berakhiran .html
            files.forEach(file => {
                if (file.endsWith('.html')) {
                    const filePath = resolve(outDir, file);
                    fs.unlinkSync(filePath);
                    console.log(`[remove-public-html] Deleted: ${file}`);
                }
            });
        },
    };
}

export default defineConfig({
    plugins: [react(), removePublicHtmlPlugin()],
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
