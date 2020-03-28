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
				<router-link to="/acceuil" class="button">Acceuil</router-link>
				<router-link to="/albums" class="button">Albums</router-link>
			</span>
			<span id="right-block">
				<router-link v-if="!user" to="/connexion" class="button">Connexion</router-link>
				<router-link v-if="user" to="/gestion" class="button">Gestion</router-link>
				<span v-if="user" class="button" v-on:click="disconnect">{{user.email}}</span>
			</span>
		</div>`,
	methods: {
		async disconnect() {
			await firebase.auth().signOut();
			this.$store.state.user = null;
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