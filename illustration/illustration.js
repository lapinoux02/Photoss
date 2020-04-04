Vue.component('illustration', {
	props: ['image', 'save', 'modify', 'remove'],
	template:
		`<div class="illustration">
			<photo :image="image" :size="'large'"></photo>
			<note :image="image" :save="save" :modify="modify" :remove="remove" :description="image.description"></note>
		</div>`
})