Vue.component('photo', {
	props: ['image', "description"],
	template :
		'<div class="photo">'+
			'<img v-bind:src="image.imageUrl">'+
			'<div class="description">{{description || image.evenement}}</div>'+
		'</div>',
	mounted: function() {
		this.$el.style.transform = 'rotate(' + MATH_UTILS.randomRotate() + 'deg)';
	}
})