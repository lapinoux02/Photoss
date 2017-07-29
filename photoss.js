var photossApp = new Vue({
	el: '#photoss',
	data: {
		images: ['2017-05-20 16.34.30.jpg', '2017-05-20 16.46.45.jpg'],
		imageUrl: 'img/2017-05-20 16.46.45.jpg'
	},
	methods: {
		getRandom: function() {
			this.imageUrl = 'img/' + this.images[Math.floor(Math.random()*this.images.length)];
		}
	},
	mounted: function() {
		setInterval(this.getRandom, 2000);
	}
})