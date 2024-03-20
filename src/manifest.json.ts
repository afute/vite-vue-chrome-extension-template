import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
    manifest_version: 3,
    name: "chrome extension template",
    version: "0.0.1",
    description: "chrome extension template",
    icons: {
        "16": "public/favicon.png",
        "32": "public/favicon.png",
        "48": "public/favicon.png",
        "128": "public/favicon.png"
    },
    action: {
        default_title: "B·C·H",
        default_popup: "index.html",
        default_icon: "public/favicon.png"
    }
});
