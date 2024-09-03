import {defineManifest} from "@crxjs/vite-plugin";
import packageJson from "./package.json";

import type {ManifestV3Export} from "@crxjs/vite-plugin";


export default defineManifest({
    manifest_version: 3,
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
    icons: {
        "16": "favicon.png",
        "32": "favicon.png",
        "48": "favicon.png",
        "128": "favicon.png"
    },
    action: {
        default_title: packageJson.name,
        default_popup: "popup.html",
        default_icon: "favicon.png"
    },
    background: {
        service_worker: "./src/service-worker.ts",
        type: "module"
    },
    content_scripts: [
        {
            js: ["./src/scripts/wrapper.ts"],
            css: [],
            matches: ["<all_urls>"],
            run_at: "document_idle"
        }
    ],
    options_page: "options.html",
    homepage_url: "https://github.com/afute/vite-vue-chrome-extension-template"
}) as ManifestV3Export;
