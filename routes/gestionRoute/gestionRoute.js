const gestionRoute = {
	data() {
		return {
			photoList: [],
			navigationIndex: 0
		}
	},
	computed: {
		image() {
			return this.photoList[this.navigationIndex];
		}
	},
	template:
		`<div id="gestionRoute">
			<div v-if="photoList.length" class="navigation">
				<div class="navigation-photo" v-on:click="this.previousPhoto" v-if="this.navigationIndex"><</div>
			</div>
			<div v-if="photoList.length" class="illustration">
				<illustration :image="image" :save="save" :remove="remove"></illustration>
			</div>
			<div v-else>
				Toutes les photos ont été traitées :)
			</div>
			<div v-if="photoList.length" class="navigation">
				<div class="navigation-photo" v-on:click="this.nextPhoto" v-if="this.navigationIndex !== this.photoList.length-1">></div>
			</div>
		</div>`,
	methods: {
		nextPhoto() {
			++this.navigationIndex;
		},
		previousPhoto() {
			--this.navigationIndex;
		},
		handleNav() {
			if (this.photoList.length <= this.navigationIndex) {
				this.navigationIndex--;
			}
		},
		async save(image) {
			await REST_CLIENT.saveImage(image);
			this.photoList[this.navigationIndex] = image;
			if (image.album) {
				this.photoList.splice(this.navigationIndex, 1);
				this.handleNav();
			}
		},
		async remove() {
			if(window.confirm('Attention, vous aller supprimer une image, êtes vous sur ?')) {
				await REST_CLIENT.deleteImage(this.image);
				this.photoList.splice(this.navigationIndex, 1);
				this.handleNav();
			}
		}
	},
	async created() {
		this.photoList.push(...(await REST_CLIENT.getUnsortedImagesData()));
	}
};