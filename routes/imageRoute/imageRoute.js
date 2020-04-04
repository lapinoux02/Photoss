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
			<illustration v-if="imageData" :album="album" :image="imageData" :modify="modify" :remove="remove"></illustration>
		</div>`,
	methods: {
		async modify(image) {
			await REST_CLIENT.unsortImage(this.imageData);
			await REST_CLIENT.saveImage(image);
			if (!this.imageData.album) {
				router.push(`/albums/${this.image.album}/images`);
			} else if (this.imageData.album !== image.album) {
				router.push(`/albums/${image.album}/images/${image.imageName}`);
			}
			this.imageData = image;
		},
		async remove() {
			if(window.confirm('Attention, vous aller supprimer une image, êtes vous sur ?')) {
				await REST_CLIENT.deleteImage(this.imageData);
				router.push(`/albums/${this.imageData.album}/images`);
			}
		}
	},
	async created() {
		this.imageData = await REST_CLIENT.getAlbumPhotoData(this.album, this.image);
	}
}