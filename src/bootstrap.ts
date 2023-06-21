import { createApp } from "vue";

import "./index.scss";

import App from "./App.vue";

import { loadFonts } from "./plugins/webfontloader";

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from "vuetify";

const vuetifyTailwindBoardMount = (el: string | Element) => {

    loadFonts()
    
    const vuetify = createVuetify({
        components, directives
    })

    const app = createApp(App).use(vuetify)
    app.mount(el)
};

const root = document.querySelector('#vuetify-tailwindcss-board')

if (root) { vuetifyTailwindBoardMount(root) }

export { vuetifyTailwindBoardMount }