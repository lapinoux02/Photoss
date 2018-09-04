const albumRoute = {
	data: function() {
		return {
			bddRef: null,
			images: {}
		}
	},
	template: 
		`<div class="row">
			<div class="col-xs-3">
			</div>
			<div class="col-xs-6">
				<div class="scrollable-container" data-simplebar>
					<div class="row scrollable-row">
						<div class="col-xs-4" v-for="image in this.images">
							<photo class="col-xs-10 col-xs-offset-1" :image="image"></photo>
						</div>
					</div>
				</div>
			</div>
		</div>`,
	created: function() {
		this.bddRef = firebase.database().ref('photos');
		this.bddRef.orderByChild('album').equalTo(router.currentRoute.params.albumId).on("value", (snap) => {
		  	this.images = Object.values(snap.val());
		});
	}
}