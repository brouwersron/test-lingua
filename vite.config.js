import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            'lingua-js': resolve(__dirname, 'vendor/cyberwolfstudio/lingua/dist/index.js')
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
