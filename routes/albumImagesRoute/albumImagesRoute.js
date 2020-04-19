const albumImagesRoute = {
	data() {
		return {
			album: router.currentRoute.params.albumId,
			images: [],
			diaporamode: false
		}
	},
	computed: {
		imageUrl() {
			return this.images.length && `${BASE_URL}/albums/${this.images[this.index].album}/photos/${this.images[this.index].imageName}`;
		}
	},
	template: 
		`<div id="albumImages">
			<div class="controls" v-on:click="openDiaporama">
				<img src="./ressources/images/slideshow.png">
				<div>{{album}}</div>
			</div>
			<div class="images">
				<span v-for="image in this.images" v-on:click="gotoImage(image)"><photo :album="album" :image="image"></photo></span>
			</div>
			<modal v-if="diaporamode" :images="images" @close="closeDiaporama"></modal>
		</div>`,
	methods: {
		gotoImage(image) {
			router.push(`/albums/${this.album}/images/${image.imageName}`);
		},
		openDiaporama() {
			this.diaporamode = true;
			document.body.classList.add('modalOpen')
		},
		closeDiaporama() {
			this.diaporamode = false;
			document.body.classList.remove('modalOpen')
		}
	},
	async created() {
		this.images.push(...(await REST_CLIENT.getAlbumPhotosData(this.album)));
	}
}