const acceuil = {
	props: ['image', 'images'],
	template:
		'<div class="row">' +
			'<div class="col-xs-3">' +
			'</div>' +
			'<div class="col-xs-6">' +
				'<illustration v-bind:image="image"></illustration>' +
			'</div>' +
		'</div>'
};