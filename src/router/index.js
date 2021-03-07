import Vue from "vue";
import VueRouter from "vue-router";

import ListAllNote from "../components/ListAllNote";
import AreaText from "../components/AreaText";
import HeaderBar from "../components/HeaderBar";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{ path: "/", component: ListAllNote },
		{ path: "/area", component: AreaText },
		{ path: "/bar", component: HeaderBar },
		{ path: "*", redirect: "/" },
	],
});
