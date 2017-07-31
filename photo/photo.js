Vue.component('photo', {
	props: ['image'],
	template :
		'<div class="photo">'+
			'<img v-bind:src="image.imageUrl" alt="Smiley face">'+
			'<div class="description">{{image.evenement}}</div>'+
		'</div>',
	mounted: function() {
		var angle = 7;
		var rotation = Math.floor(Math.random()*angle) - (angle-1)/2;
		this.$el.style.transform = 'rotate(' + rotation + 'deg)';
	}
})