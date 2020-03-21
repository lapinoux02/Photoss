Vue.component('photo', {
	props: ['image', "description"],
	computed: {
		imageUrl: function() {
			return this.image ? REST_CLIENT.photos + this.image.imageName : null;
		}
	},
	template :
		'<div class="photo">'+
			'<img v-bind:src="imageUrl">'+
			'<div class="description">{{description || image.evenement}}</div>'+
		'</div>',
	mounted: function() {
		this.$el.style.transform = 'rotate(' + MATH_UTILS.randomRotate() + 'deg)';
	}
})