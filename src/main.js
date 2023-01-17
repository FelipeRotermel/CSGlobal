import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "bootstrap/dist/css/bootstrap.css"; 
import "bootstrap/dist/js/bootstrap.js"
import "@/utils/navbar.js"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import vueScrollto from 'vue-scrollto'

library.add(fas, far, fab);

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('fa', FontAwesomeIcon)

app.use(vueScrollto, {
    container: "body",
    duration: 100,
    easing: "ease",
    offset: -55,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

app.mount('#app')
