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
				<li>Lieu : <input v-model="tmpImage.lieu" type="text" v-if="editable" class="note-input"/><span v-else>{{image.lieu}}</span></li>
				<li>Date : <input v-model="tmpImage.date" type="text" v-if="editable" class="note-input"/><span v-else>{{image.date}}</span></li>
				<li>Evenement : <input v-model="tmpImage.evenement" type="text" v-if="editable" class="note-input"/><span v-else>{{image.evenement}}</span></li>
				<li>Description : <input v-model="tmpImage.description" type="text" v-if="editable" class="note-input"/><span v-else>{{image.description}}</span></li>
				<li>Album : <input v-model="tmpImage.album" type="text" v-if="editable" class="note-input"/><span v-else>{{image.album}}</span></li>
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
		this.$el.style.transform = MATH_UTILS.randomRotate();
	},
	watch: {
		image(val) {
			this.tmpImage = Object.assign({}, val);
			this.$el.style.transform = MATH_UTILS.randomRotate();
		}
	}
})