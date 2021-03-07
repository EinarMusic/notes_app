import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import store from "./store";
import router from "./router";
import "font-awesome/css/font-awesome.min.css";

new Vue({
	render: (h) => h(App),
	store,
	router,
}).$mount("#app");
