const router = new VueRouter({
	routes: [
		{path: '/', component: acceuil},
		{path: '/acceuil', component: acceuil},
		{path: '/albums', component: albums},
		{path: '/albums/:albumId', component: albumRoute},
		{path: '/gestion', component: gestion}
	]
})

var photossApp = new Vue({
	router: router,
	el: '#photoss'
})
