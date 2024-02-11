import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest(async () => ({
    manifest_version: 3,
    name: "Chrome Extension",
    version: "0.0.1",
    description: "Vite + Vue + Typescript + Less",
    icons: {
        "16": "src/resource/favicon.png",
        "32": "src/resource/favicon.png",
        "48": "src/resource/favicon.png",
        "128": "src/resource/favicon.png",
    },
    action: {
        default_popup: "src/main.html",
        default_title: "Chrome Extension",
        default_icon: "src/resource/favicon.png"
    },
    permissions: [] as chrome.runtime.ManifestPermissions[],
}));
