Vue.component('lettre', {
	props: ['lettreUrl', 'alt'],
	template: '<img v-bind:src="lettreUrl" v-bind:alt="alt" class="lettre">',
	mounted: function() {
		this.$el.style.transform = 'rotate(' +  MATH_UTILS.randomRotate() + 'deg)';
	}
})