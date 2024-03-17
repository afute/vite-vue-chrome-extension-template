import process from "process";
import path from "path";

import vueJsx from "@vitejs/plugin-vue-jsx";
import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

import manifest from "./src/manifest.json";

const watch: boolean = process.argv.indexOf("--watch") === -1;

export default defineConfig({
    plugins: [vue(), vueJsx(), crx({manifest}),],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "*": path.resolve("")
        }
    },
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: watch,
                drop_debugger: watch,
            },
        }
    }
});
