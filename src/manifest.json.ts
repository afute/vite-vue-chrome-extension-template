import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
    manifest_version: 3,
    name: "chrome-extension-template",
    version: "0.0.1",
    description: "chrome插件模板",
    icons: {
        "16": "src/assets/favicon.png",
        "32": "src/assets/favicon.png",
        "48": "src/assets/favicon.png",
        "128": "src/assets/favicon.png"
    },
    action: {
        default_title: "B·C·H",
        default_popup: "index.html",
        default_icon: "src/assets/favicon.png"
    }
});
