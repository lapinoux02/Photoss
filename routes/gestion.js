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