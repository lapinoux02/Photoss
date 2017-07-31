Vue.component('lettre', {
	props: ['lettreUrl', 'alt'],
	template: '<img v-bind:src="lettreUrl" v-bind:alt="alt" class="lettre">',
	mounted: function() {
		var angle = 7;
		var rotation = Math.floor(Math.random()*angle) - (angle-1)/2;
		this.$el.style.transform = 'rotate(' + rotation + 'deg)';
	}
})