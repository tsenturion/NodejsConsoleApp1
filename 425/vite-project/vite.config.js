import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    root: 'src',
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    plugins: [react()],
})

export default defineConfig(({ mode }) => {
    if (mode === 'development') {
        return {
            // dev specific config
        }
    } 
    if (mode === 'production') {
        return {
            // build specific config
        }
    }
    return {}
}