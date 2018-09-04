Vue.component('navbar', {
	props: ['images'],
	template: 
		'<div class="navbar">'+
			'<div class="row">'+
				'<router-link to="/acceuil" class="col-xs-2 button">Acceuil</router-link>'+
				'<router-link to="/albums" class="col-xs-2 button">Albums</router-link>'+
				'<router-link to="/gestion" class="col-xs-2 button">Gestion</router-link>'+
			'</div>'+
		'</div>'
});