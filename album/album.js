Vue.component('album', {
	props: ['album'],
	template :
		`<div class="album">
			<photo class="photoAlbum" v-bind:image="album.liste[0]"></photo>
			<photo class="photoAlbum" v-bind:image="album.liste[0]"></photo>
			<photo class="photoAlbum" v-bind:image="album.liste[0]"></photo>
		</div>`,
	mounted: function() {
		/*var angle = 7;
		var rotation = Math.floor(Math.random()*angle) - (angle-1)/2;
		this.$el.style.transform = 'rotate(' + rotation + 'deg)';*/
	}
});