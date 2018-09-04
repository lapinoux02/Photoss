const albums = {
	data: function() {
		return {
			bddRef: null,
			albums: []
		};
	},
	template:
		`<div class="row">
			<div class="col-xs-3">
			</div>
			<div class="col-xs-6">
				<div class="scrollable-container" data-simplebar>
					<div class="row scrollable-row">
						<div class="col-xs-4" v-for="album in this.albums" v-on:click="gotoAlbum(album)">
							<album class="col-xs-10 col-xs-offset-1" :album="album" :key="album.titre"></album>
						</div>
					</div>
				</div>
			</div>
		</div>`,
	methods: {
		gotoAlbum: (album) => {
			router.push(`/albums/${album.title}`);
		}
	},
	created: function() {
		bddRef.on('value', snap => {
			let sortedImages = Object.values(snap.val()).sort((a,b) => a.album > b.album);
			this.albums = [];
			while (sortedImages.length) {
				this.albums.push({
					title: sortedImages[0].album,
					list: sortedImages.splice(0, sortedImages.map(e => e.album).lastIndexOf(sortedImages[0].album) + 1)
				});
			}
		});
	}
};