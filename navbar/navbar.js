Vue.component('navbar', {
	store,
	computed: {
		user() {
			return store.state.user
		}
	},
	template: 
		`<div id="navbar">
			<span id="left-block">
				<router-link v-if="user" to="/accueil" class="button">Accueil</router-link>
				<router-link v-if="user" to="/albums" class="button">Albums</router-link>
			</span>
			<span id="right-block">
				<router-link v-if="!user" to="/connexion" class="button">Connexion</router-link>
				<span v-if="user && user.isUserPrio" v-on:click="openImport" class="button">Ajouter</span>
				<router-link v-if="user && user.isUserPrio" to="/gestion" class="button">Classer</router-link>
				<span v-if="user" class="button" v-on:click="disconnect">{{user.email}}</span>
			</span>
		</div>`,
	methods: {
		async disconnect() {
			await firebase.auth().signOut();
			store.state.user = null;
			router.push('/connexion');
		},
		openImport() {
			let input = document.createElement('input');
			input.type = 'file';
			input.multiple = true;
			input.onchange = () => {
				let formData = new FormData();
				[...input.files].forEach(file => formData.append(`files`, file));
				REST_CLIENT.addFile(formData);
			}
			input.click();
		}
	}
});