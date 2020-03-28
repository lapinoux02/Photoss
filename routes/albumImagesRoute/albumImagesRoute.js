const albumImagesRoute = {
	data() {
		return {
			album: router.currentRoute.params.albumId,
			images: []
		}
	},
	template: 
		`<div id="albumImages">
			<span v-for="image in this.images" v-on:click="gotoImage(image)"><photo :album="album" :image="image"></photo></span>
		</div>`,
	methods: {
		gotoImage(image) {
			router.push(`/albums/${this.album}/images/${image.imageName}`);
		}
	},
	async created() {
		this.images.push(...(await REST_CLIENT.getAlbumPhotosData(this.album)));
	}
}