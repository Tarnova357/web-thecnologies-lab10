import { defineConfig } from 'vite';
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import path from 'path';

export default defineConfig({
    plugins: [
        vituum(),
        pug({
            root: './src'
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), 'src'),
            '@assets': path.resolve(process.cwd(), 'src/assets')
        }
    }
});