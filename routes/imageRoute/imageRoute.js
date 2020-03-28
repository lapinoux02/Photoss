const imageRoute = {
	data() {
		return {
			album: router.currentRoute.params.albumId,
			image: router.currentRoute.params.imageName,
			imageData: null
		}
	},
	template:
		`<div id="imageRoute">
			<illustration v-if="imageData" :album="album" :image="imageData" :modify="modify"></illustration>
		</div>`,
	methods: {
		async modify(image) {
			await REST_CLIENT.unsortImage(this.imageData);
			await REST_CLIENT.saveImage(image);
			if (this.imageData.album !== image.album) {
				router.push(`/albums/${image.album}/images/${image.imageName}`);
			}
			this.imageData = image;
		}
	},
	async created() {
		this.imageData = await REST_CLIENT.getAlbumPhotoData(this.album, this.image);
	}
}