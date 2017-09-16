Vue.component('album', {
	props: ['album'],
	template :
		'<div class="album">'+
			'<div class="photoVide"></div>'+
			'<div class="photoVide"></div>'+
			'<div class="photoVide"></div>'+
			'<div class="photo" :image="album[0]"></div>'+
		'</div>',
	mounted: function() {
		var angle = 7;
		var rotation = Math.floor(Math.random()*angle) - (angle-1)/2;
		this.$el.style.transform = 'rotate(' + rotation + 'deg)';
	}
});