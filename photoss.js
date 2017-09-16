const acceuil = {
	props: ['image', 'images'],
	template: 
		'<div class="row">' +
			'<div class="col-xs-3">' +
			'</div>' +
			'<div class="col-xs-6">' +
				'<illustration v-bind:image="image"></illustration>' +
			'</div>' +
		'</div>'
};

const album = {
	props: ['image', 'images'],
	data: function() {
		return {
			albums: function() {
				var albums = [];
				this.images.forEach(function(image) {
					if (albums.indexOf(image.album) === -1) {
						albums[image.album] = [image];
					} else {
						albums[image.album].push(image);
					}
				});
				return albums;
			}
		};
	},
	template:
		`<div>
			<album v-for="album in this.albums"></album>
		</div>`
};

const router = new VueRouter({
	routes: [
		{path: '/', component: acceuil},
		{path: '/acceuil', component: acceuil},
		{path: '/album', component: album}
	]
})

var photossApp = new Vue({
	router: router,
	el: '#photoss',
	data: {
		images: [{			
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQu_RxdsKbjl4JhIxcAu6cT2n8wVU70kO1gZKZLYubDAUm0Ss9Q',
			evenement: '???',
			description: '???',
			lieu: '???',
			date: '???',
			album: 'test'
		}],
		image: {},
		intervalId: null
	},
	methods: {
		getRandom: function() {
			this.image = this.images[Math.floor(Math.random()*this.images.length)];
		}
	},
	mounted: function() {
		image = this.getRandom();
		intervalId = setInterval(this.getRandom, 4000);
	},
	updated: function() {
		clearInterval(intervalId);
		image = this.getRandom();
		intervalId = setInterval(this.getRandom, 4000);
	}
})