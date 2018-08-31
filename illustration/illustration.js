Vue.component('illustration', {
	props: ['image', 'alterable', 'save'],
	template:
		`<div class="row">
			<div class="col-xs-8">
				<photo :image="image || {}"></photo>
			</div>
			<div class="col-xs-4">
				<note :image="image || {}" :alterable="alterable" :save="save"></note>
			</div>
		</div>`
})