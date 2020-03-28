const acceuilRoute = {
	data() {
		return {
			image: null,
			intervalId: null
		}
	},
	template:
		`<div id="acceuilRoute">
			<illustration v-if="image" :image="image"></illustration>
		</div>`,
	methods: {
		async getRandom() {
			let image = await REST_CLIENT.getRandomImageData()
			this.image = image;
		}
	},
	created() {
		this.getRandom();
		this.intervalId = setInterval(this.getRandom, 4000);
	},
	beforeDestroy() {
		clearInterval(this.intervalId);
	}
};