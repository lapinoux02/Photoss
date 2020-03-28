const albumsRoute = {
	data() {
		return {
			albums: []
		};
	},
	template:
		`<div id="albumsRoute">
			<span v-for="album in this.albums" v-on:click="gotoAlbum(album)"><album :album="album" :key="album.title"></album><span>
		</div>`,
	methods: {
		gotoAlbum: (album) => {
			router.push(`/albums/${album.title}/images`);
		}
	},
	async created() {
		(await REST_CLIENT.getAlbums()).forEach(async album => {
			this.albums.push({
				title: album,
				sample: await REST_CLIENT.getSampleAlbumPhotosData(album)
			});
		});
	}
};