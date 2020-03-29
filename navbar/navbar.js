Vue.component('navbar', {
	store,
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	template: 
		`<div id="navbar">
			<span id="left-block">
				<router-link to="/acceuil" class="button">Accueil</router-link>
				<router-link to="/albums" class="button">Albums</router-link>
			</span>
			<span id="right-block">
				<router-link v-if="!user" to="/connexion" class="button">Connexion</router-link>
				<span v-if="user" v-on:click="openImport" class="button">Ajouter</span>
				<router-link v-if="user" to="/gestion" class="button">Classer</router-link>
				<span v-if="user" class="button" v-on:click="disconnect">{{user.email}}</span>
			</span>
		</div>`,
	methods: {
		async disconnect() {
			await firebase.auth().signOut();
			this.$store.state.user = null;
		},
		openImport() {
			let input = document.createElement('input');
			input.type = 'file';
			input.onchange = () => {
				let file = input.files[0];
				let formData = new FormData();
				formData.append('file', file);
				REST_CLIENT.addFile(formData);
			}
			input.click();
		}
	},
	mounted() {
		firebase.auth().onAuthStateChanged((user) => {
		  	if (user) {
		  		this.$store.state.user = user;
		  	}
		});
	}
});