const imageRoute = {
	data: function() {
		return {
			image: {}
		}
	},
	template:
		`<div class="row">
			<div class="col-xs-3">coucou
			</div>
			<div class="col-xs-6">
				<illustration v-bind:image="image"></illustration>
			</div>
		</div>`,
	created: function() {
		bddRef.orderByChild('imageName').equalTo(router.currentRoute.params.imageName).on('value', (snap) => {
		  	this.image = Object.values(snap.val())[0];
		});
	}
}