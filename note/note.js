Vue.component('note', {
	props: ['image'],
	template :
		'<ul class="note">'+
			'<li>Lieu : {{image.lieu}}</li>'+
			'<li>Date : {{image.date}}</li>'+
			'<li>Evenement : {{image.evenement}}</li>'+
			'<li>Description : {{image.description}}</li>'+
		'</ul>',
	mounted: function() {
		var angle = 7;
		var rotation = Math.floor(Math.random()*angle) - (angle-1)/2;
		this.$el.style.transform = 'rotate(' + rotation + 'deg)';
	}
})