Vue.component('modal', {
	props: ['images'],
	data() {
		return {
			index: 0
		}
	},
	computed: {
		imageUrl() {
			return this.images.length && `${BASE_URL}/albums/${this.images[this.index].album}/photos/${this.images[this.index].imageName}`;
		}
	},
	template: 
		`<div class="modal">
			<div class="modalHeader">
				<div class="close" v-on:click="close">🞬</div>
			</div>
			<div class="modalContent">
				<div v-if="index" class="nav" v-on:click="index--"><</div><div v-else class="nav noclick"></div>
				<img :src="imageUrl">
				<div v-if="index < images.length - 1" class="nav" v-on:click="index++">></div><div v-else class="nav noclick"></div>
			</div>
		</div>`,
	methods: {
		close() {
			this.$emit('close');
		},

	},
	created() {
		document.body.classList.add('modalOpen');
	},
	destroyed() {
		document.body.classList.remove('modalOpen');
	}
})