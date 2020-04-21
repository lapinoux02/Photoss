Vue.component('photo', {
	// size = 'large' | 'small' (si une autre valeur est saisie, 'small' sera pris par defaut)
	props: ['image', "description", "size"],
	data() {
		return {
			imageUrl: null
		}
	},
	computed: {
		classes() {
			return `photo ${this.size || ''} ${this.description ? 'withDescription' : ''}`;
		}
	},
	template:
		`<div :class="classes">
			<img :src="imageUrl">
			<div v-if="description" class="description">{{description}}</div>
		</div>`,
	async mounted() {
		this.imageUrl = 'data:image/jpeg;base64,' + (await REST_CLIENT.getPhoto(this.image.album || undefined, this.image.imageName));
		this.$el.style.transform = MATH_UTILS.randomRotate();
	},
	watch: {
		async image(val) {
			this.imageUrl = 'data:image/jpeg;base64,' + (await REST_CLIENT.getPhoto(this.image.album || undefined, this.image.imageName));
			this.$el.style.transform = MATH_UTILS.randomRotate();
		}
	}
});