Vue.component('illustration', {
	props: ['image'],
	template:
		'<div class="row">' +
			'<div class="col-xs-8">' +
				'<photo v-bind:image="image"></photo>' +
			'</div>' +
			'<div class="col-xs-4">' +
				'<note v-bind:image="image"></note>' +
			'</div>' +
		'</div>'
})