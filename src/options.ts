import OptionsComponent from "@/views/Options.vue";

import {createApp} from "vue";

import type {App} from "vue";

import "@/styles/app.scss";


const app: App<Element> = createApp(OptionsComponent);
app.mount("#app");
