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
			this.$store.state.user = (await firebase.auth().signInWithEmailAndPassword(this.mail, this.password)).user;
			router.push('/acceuil');
		}
	}
};