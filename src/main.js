import * as Vue from "vue";
import App from "./App.vue";
import router from './router';

import {
    library
} from '@fortawesome/fontawesome-svg-core';

import {
    faTrash,
    faVideo,
    faUser
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faVideo, faUser);



Vue.createApp(App).use(router).mount("#app")