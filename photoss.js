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
	el: '#photoss',
	data: {
		images: [],
		image: {},
		intervalId: null
	},
	methods: {
		getRandom: function() {
			this.image = this.images[Math.floor(Math.random()*this.images.length)];
		}
	},
	created: function() {
		this.bddRef = firebase.database().ref('photos');
		this.bddRef.on('value', snap => {
			this.images = Object.values(snap.val());
		});
	},
	mounted: function() {
		this.getRandom();
		this.intervalId = setInterval(this.getRandom, 4000);
	},
	updated: function() {
		clearInterval(this.intervalId);
		this.getRandom();
		this.intervalId = setInterval(this.getRandom, 4000);
	}
})
