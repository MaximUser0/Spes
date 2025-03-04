import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/index.jsx',
                'resources/scss/app.scss',
            ],
            refresh: true,
        }),
        react(),
    ],
});