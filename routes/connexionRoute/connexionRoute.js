const connexionRoute = {
	store,
	data() {
		return {
			mail: '',
			password: ''
		}
	},
	template:
		`<div id="connexionRoute">
			<input type="email" v-model="mail"/>
			<input type="password" v-model="password"/>
			<span class="button" v-on:click="signIn">Connexion</span>
		</div>`,
	methods: {
		async signIn() {
			// Passer en local pour pouvoir raffraichir tranquillement (LOCAL)
			await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
			const user = (await firebase.auth().signInWithEmailAndPassword(this.mail, this.password)).user;
			user.isUserPrio = await REST_CLIENT.isUserPrio(user);
			this.$store.state.user = user;
			router.push('/accueil');
		}
	}
};