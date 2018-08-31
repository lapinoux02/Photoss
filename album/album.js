Vue.component('album', {
	props: ['album'],
	template :
		`<div class="album">
			<photo class="photoAlbum" v-bind:image="album.liste[0]"></photo>
			<photo class="photoAlbum" v-bind:image="album.liste[0]"></photo>
			<photo class="photoAlbum" v-bind:image="album.liste[0]"></photo>
		</div>`,
	mounted: function() {
	}
});