Vue.component('photo', {
	props: ['image'],
	template :
		'<div class="photo">'+
			'<img v-bind:src="image.imageUrl" alt="Smiley face">'+
			'<div class="description">{{image.evenement}}</div>'+
		'</div>'
})