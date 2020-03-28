Vue.component('album', {
	props: ['album'],
	template:
		`<div class="album">
			<div class="photoAlbum"><photo :album="album.title" :image="album.sample" :description="album.title"></photo></div>
			<div class="photoAlbum"><photo :album="album.title" :image="album.sample" :description="album.title"></photo></div>
			<div class="photoAlbum"><photo :album="album.title" :image="album.sample" :description="album.title"></photo></div>
		</div>`
});