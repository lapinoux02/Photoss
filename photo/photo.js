Vue.component('photo', {
	// size = 'large' | 'small' (si une autre valeur est saisie, 'small' sera pris par defaut)
	props: ['image', "description", "size"],
	computed: {
		imageUrl() {
			return `${BASE_URL}/albums/${this.image.album || undefined}/photos/${this.image.imageName}`;
		},
		classes() {
			return `photo ${this.size || ''}`;
		}
	},
	template:
		`<div :class="classes">
			<img :src="imageUrl">
			<div class="description">{{description || image.description}}</div>
		</div>`,
	mounted() {
		Object.assign(this.$el.style, {
			transform: MATH_UTILS.randomRotate()
		});
	},
	watch: {
		image(val) {
			this.$el.style.transform = MATH_UTILS.randomRotate();
		}
	}
});