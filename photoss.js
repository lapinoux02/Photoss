var photossApp = new Vue({
	el: '#photoss',
	data: {
		images: [{			
			imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQu_RxdsKbjl4JhIxcAu6cT2n8wVU70kO1gZKZLYubDAUm0Ss9Q',
			evenement: '???',
			description: '???',
			lieu: '???',
			date: '???'
		}],
		image: {},
		intervalId: null
	},
	methods: {
		getRandom: function() {
			this.image = this.images[Math.floor(Math.random()*this.images.length)];
		}
	},
	mounted: function() {
		image = this.getRandom();
		intervalId = setInterval(this.getRandom, 4000);
	},
	updated: function() {
		clearInterval(intervalId);
		image = this.getRandom();
		intervalId = setInterval(this.getRandom, 4000);
	}
})