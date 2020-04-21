Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		setUser(state, val) {
			state.user = val;
		},
		setUserPrio(state, val) {
			state.user.isUserPrio = val;
		}
	}
})