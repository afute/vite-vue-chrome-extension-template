import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {crx} from "@crxjs/vite-plugin";

import manifest from "./manifest.json";
import path from "path";


type A1 = string | {relative?: boolean, runtime?: string} | undefined;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        crx({manifest}),
    ],
    experimental: {
        // content_scripts "@font" in CSS could not load the workaround
        renderBuiltUrl(filename: string, {hostType}): A1 {
            if (hostType === "css") {
                return `chrome-extension://__MSG_@@extension_id__/${filename}`;
            } else return filename;
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
