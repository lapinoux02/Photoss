Vue.component('autocompleteInput', {
	props: ['value'],
	data() {
		return {
			autocomplist: []
		}
	},
	template:
		`<div class="autocompleteInput">
			<input list="datalist" ref="input" :value="value" @input="inputChange()"/>
			<datalist id="datalist">
				<option v-for="item in this.autocomplist">{{item}}</option>
			</datalist>
		</div>`,
	methods: {
		async inputChange() {
			const currentVal = this.$refs.input.value;
			this.$emit('input', currentVal);
		}
	},
	async created() {
		this.autocomplist = await REST_CLIENT.getAlbums();
	}
});