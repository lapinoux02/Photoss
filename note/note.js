Vue.component('note', {
	props: ['image'],
	template :
		'<ul class="note">'+
			'<li>Lieu : {{image.lieu}}</li>'+
			'<li>Date : {{image.date}}</li>'+
			'<li>Evenement : {{image.evenement}}</li>'+
			'<li>Description : {{image.description}}</li>'+
		'</ul>'
})