Vue.component('lettre', {
	props: ['lettreUrl', 'alt'],
	template: '<img :src="lettreUrl" :alt="alt" class="lettre">',
	mounted() {
		this.$el.style.transform = MATH_UTILS.randomRotate();
	}
})