Vue.component('autocompleteInput', {
	props: ['value'],
	data() {
		return {
			autocomplist: [],
			focus: false
		}
	},
	template:
		`<div>
			<input ref="input" :value="value" @input="inputChange()" @focus="onFocus()" @blur="onBlur()"/>
			<ul class="autocomplist" v-if="autocomplist.length && focus">
				<li v-for="item in this.autocomplist" v-on:click="chooseItem(item)">{{item}}</li>
			</ul>
		</div>`,
	methods: {
		onFocus() {
			this.focus = true;
			this.inputChange();
		},
		onBlur() {
			// FIX ME : On n'efface pas la liste immédiatement pour que le click ai le temps de se faire. Il faudrait plutot implémenter une mécanique propre de focus / blur
			setTimeout(() => this.focus = false, 100);
		},
		async inputChange() {
			const currentVal = this.$refs.input.value;
			if (!currentVal) return;

			this.$emit('input', currentVal);
			const newVals = await REST_CLIENT.getAlbumAutocomplete(currentVal);
			this.autocomplist.length = 0;
			this.autocomplist.push(...newVals);
		},
		chooseItem(item) {
			this.$refs.input.value = item;
			this.inputChange();
		}
	}
});