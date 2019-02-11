const routes = [
	{ path: '/', redirect: '/list' },
	{ path: '/list', component: Vue.component('route-list') },
	{ path: '/room/:roomName', component: Vue.component('route-room') },
	{ path: '/login', component: Vue.component('route-login') },
	{ path: '/booking', component: Vue.component('route-booking') },
	{ path: '/book/:instructor', component: Vue.component('route-book') },
];

// Create VueRouter
// Docs: https://router.vuejs.org/guide
const router = new VueRouter({
	routes
});

// Create VueApp
// Docs: https://vuejs.org/v2/guide
const app = new Vue({
	// el: '#app' // can't use element property with VueRouter
	router,
	methods: {
		redirect(target) {
			// Used in the navigation
			this.$router.push(target);
		}
	}
}).$mount('#app');
