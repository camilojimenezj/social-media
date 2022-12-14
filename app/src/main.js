import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const GStore = reactive({ successMessage: '', errorMessage: '', session: null });

const app = createApp(App);

app.use(router);
app.provide("GStore", GStore);
app.mount("#app");

