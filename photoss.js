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

const albums = {
	props: ['image', 'images'],
	data: function() {

		var albums = [];

		var imagesTriees = this.images.slice().sort((a,b) => a.album > b.album);
		var imagesMappees = imagesTriees.map(i => i.album);
		while (imagesTriees.length) {
			albums.push({
				titre: imagesTriees[0].album,
				liste: imagesTriees.splice(0, imagesMappees.lastIndexOf(imagesTriees[0].album)+1)
			});
		}

		return {
			albums: albums
		};
	},
	template:
		`<div class="row">
			<div class="col-xs-3">
			</div>
			<div class="col-xs-6">
				<div class="row">
					<div>
						<album class="col-xs-6" v-for="album in this.albums" :album="album" :key="album.titre"></album>
					</div>
				</div>
			</div>
		</div>`
};

const gestion = {
	props: ['image', 'images'],
	data: function() {
		return {
			bddRef: null,
			photoList: [],
			navigationIndex: 0
		}
	},
	template:
		`<div class="row">
			<div class="col-xs-2"></div>
			<div class="col-xs-1">
				<div class="navigation-photo" v-on:click="this.previousPhoto" v-if="this.navigationIndex"><</div>
			</div>
			<div class="col-xs-6">
				<illustration :image="photoList[navigationIndex]" :alterable="true" :save="save"></illustration>
			</div>
			<div class="col-xs-1">
				<div class="navigation-photo" v-on:click="this.nextPhoto" v-if="this.navigationIndex !== this.photoList.length-1">></div>
			</div>
		</div>`,
	methods: {
		nextPhoto: function() {
			++this.navigationIndex;
		},
		previousPhoto: function() {
			--this.navigationIndex;
		},
		save: function() {
			this.bddRef.push(this.photoList.splice(this.navigationIndex, 1)[0]);
		}
	},
	created: async function() {
		let firebasePhotos = [];

		// Récupération des photos locales
		res = await axios.get(REST_CLIENT.photoList);
		let localPhotosNames = res.data;

		// Initialisation ref firebase et récupération des photos qui y sont
		this.bddRef = firebase.database().ref('photos');
		this.bddRef.on('value', snap => {
			firebasePhotos = snap.val();
			this.photoList = localPhotosNames.filter(photoName => {
				return !Object.values(firebasePhotos).some(photo => photo.imageUrl === REST_CLIENT.photos + photoName);
			}).map((photoName, i) => {
				return Object.assign(this.photoList[i] || {}, {
					imageUrl: REST_CLIENT.photos + photoName
				});
			});
		});
	}
};

const router = new VueRouter({
	routes: [
		{path: '/', component: acceuil},
		{path: '/acceuil', component: acceuil},
		{path: '/albums', component: albums},
		{path: '/gestion', component: gestion}
	]
})

var photossApp = new Vue({
	router: router,
	el: '#photoss',
	data: {
		images: [{			
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQu_RxdsKbjl4JhIxcAu6cT2n8wVU70kO1gZKZLYubDAUm0Ss9Q',
			evenement: 'ev',
			description: 'tata',
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
