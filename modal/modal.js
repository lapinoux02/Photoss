Vue.component('modal', {
	props: ['images'],
	data() {
		return {
			index: 0,
			imageUrl: null
		}
	},
	template: 
		`<div class="modal">
			<div class="modalHeader">
				<div class="close" v-on:click="close">🞬</div>
			</div>
			<div class="modalContent">
				<div v-if="index" class="nav" v-on:click="prev"><</div><div v-else class="nav noclick"></div>
				<img :src="imageUrl">
				<div v-if="index < images.length - 1" class="nav" v-on:click="next">></div><div v-else class="nav noclick"></div>
			</div>
		</div>`,
	methods: {
		async next() {
			this.index++;
			this.imageUrl = 'data:image/jpeg;base64,' + (await REST_CLIENT.getPhoto(this.images[this.index].album || undefined, this.images[this.index].imageName));
		},
		async prev() {
			this.index--;
			this.imageUrl = 'data:image/jpeg;base64,' + (await REST_CLIENT.getPhoto(this.images[this.index].album || undefined, this.images[this.index].imageName));
		},
		close() {
			this.$emit('close');
		}
	},
	async created() {
		document.body.classList.add('modalOpen');
		this.imageUrl = 'data:image/jpeg;base64,' + (await REST_CLIENT.getPhoto(this.images[this.index].album || undefined, this.images[this.index].imageName));
	},
	destroyed() {
		document.body.classList.remove('modalOpen');
	}
})