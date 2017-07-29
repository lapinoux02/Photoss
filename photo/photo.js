Vue.component('photo', {
	props: ['imageUrl'],
	template :
		'<div class="photo">'+
			'<img v-bind:src="imageUrl" alt="Smiley face">'+
		'</div>'
})