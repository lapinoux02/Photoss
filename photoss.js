const router = new VueRouter({
	routes: [
		{path: '/', component: acceuilRoute},
		{path: '/acceuil', component: acceuilRoute},
		{path: '/albums', component: albumsRoute},
		{path: '/albums/:albumId', component: albumRoute},
		{path: '/gestion', component: gestionRoute}
	]
})

var photossApp = new Vue({
	router: router,
	el: '#photoss'
})
