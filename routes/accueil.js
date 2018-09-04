const acceuil = {
	data: function() {
		return {
			images: [],
			image: {}
		}
	},
	template:
		'<div class="row">' +
			'<div class="col-xs-3">' +
			'</div>' +
			'<div class="col-xs-6">' +
				'<illustration v-bind:image="image"></illustration>' +
			'</div>' +
		'</div>',
	methods: {
		getRandom: function() {
			this.image = this.images[Math.floor(Math.random()*this.images.length)];
		}
	},
	created: function() {
		this.bddRef = firebase.database().ref('photos');
		this.bddRef.on('value', snap => {
			this.images = Object.values(snap.val());
		});
		this.getRandom();
		this.intervalId = setInterval(this.getRandom, 4000);
	},
};