import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// Emitter configuration
import mitt from "mitt";
const Emitter = mitt();
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Initialize Pinia
const pinia = createPinia();

// Create Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
});
// Mdi_Fonts
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

createApp(App)
  .use(pinia)
  .use(router)
  .provide("Emitter", Emitter)
  .use(vuetify)
  .mount("#app");
