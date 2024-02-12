import path from "path";

import manifest from "./src/manifest.json";

import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";

import { defineConfig } from "vite";


export default defineConfig({
    plugins: [
        vue(),
        crx({ manifest })
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
