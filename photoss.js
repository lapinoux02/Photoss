var photossApp = new Vue({
	el: '#photoss',
	data: {
		images: [{			
			imageUrl: 'img/2017-05-20 16.46.45.jpg',
			evenement: 'aa',
			description: 'bb',
			lieu: 'Nantes',
			date: 'cd'
		}, {			
			imageUrl: 'img/2017-05-20 16.34.30.jpg',
			evenement: 'aaa',
			description: 'bbb',
			lieu: 'Toulouse',
			date: 'ccc'
		}],
		image: null
	},
	methods: {
		getRandom: function() {
			this.image = this.images[Math.floor(Math.random()*this.images.length)];
		}
	},
	mounted: function() {
		image = this.getRandom();
		setInterval(this.getRandom, 2000);
	}
})