import path from "path";

import vueJsx from "@vitejs/plugin-vue-jsx";
import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import manifest from "./src/manifest.json";

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
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
            "@": path.resolve(__dirname, "./src"),
            "*": path.resolve("")
        },
    }
});
