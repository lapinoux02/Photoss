const router = new VueRouter({
	routes: [
		{path: '/', component: accueilRoute},
		{path: '/accueil', component: accueilRoute},
		{path: '/albums', component: albumsRoute},
		{path: '/albums/:albumId/images', component: albumImagesRoute},
		{path: '/albums/:albumId/images/:imageName', component: imageRoute},
		{path: '/gestion', component: gestionRoute},
		{path: '/connexion', component: connexionRoute}
	]
})

var photossApp = new Vue({
	router: router,
	el: '#photoss'
})
