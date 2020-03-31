Vue.component('note', {
	props: ['image', 'save', 'modify'],
	store,
	data() {
		return {
			tmpImage: null,
			modifying: false
		}
	},
	computed: {
		editable() {
			return this.save || this.modifying;
		},
		canModify() {
			return this.modify && this.$store.state.user;
		}
	},
	template :
		`<div>
			<ul v-if="tmpImage" class="note">
				<li class="albumIco"><input v-model="tmpImage.album" type="text" v-if="editable"/><span v-else>{{image.album}}</span></li>
				<li class="dateIco"><input v-model="tmpImage.date" type="text" v-if="editable"/><span v-else>{{image.date}}</span></li>
				<li class="lieuIco"><input v-model="tmpImage.lieu" type="text" v-if="editable"/><span v-else>{{image.lieu}}</span></li>
				<li class="descriptionIco"><textarea v-model="tmpImage.description" type="text" v-if="editable"/><span v-else>{{image.description}}</span></li>
			</ul>
			<div v-if="save" class="button" v-on:click="save(tmpImage)">Enregistrer</div>
			<div v-if="canModify && !modifying" class="button" v-on:click="toggleModification()">Modifier</div>
			<div v-if="canModify && modifying" class="button" v-on:click="modify(tmpImage) && toggleModification()">Enregistrer</div>
			<div v-if="canModify && modifying" class="button" v-on:click="toggleModification()">Annuler</div>
		</div>`,
	methods: {
		toggleModification() {
			this.tmpImage = Object.assign({}, this.image);
			this.modifying = !this.modifying;
		}
	},
	mounted() {
		this.tmpImage = Object.assign({}, this.image);
	},
	watch: {
		image(val) {
			this.tmpImage = Object.assign({}, val);
		}
	}
})