Vue.component('album', {
	props: ['album'],
	template :
		`<div class="album">
			<photo :image="album.list[0]" :description="album.title"></photo>
			<photo class="photoAlbum" :image="album.list[0]" :description="album.title"></photo>
			<photo class="photoAlbum" :image="album.list[0]" :description="album.title"></photo>
		</div>`
});