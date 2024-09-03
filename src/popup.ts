import PopupComponent from "@/views/Popup.vue";

import {createApp} from "vue";

import type {App} from "vue";

import "@/styles/app.scss";


const app: App<Element> = createApp(PopupComponent);
app.mount("#app");
