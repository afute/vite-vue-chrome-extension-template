import { crx } from "@crxjs/vite-plugin";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import manifest from "./src/manifest.json";


export default defineConfig({
    plugins: [vue(), crx({ manifest })]
});
