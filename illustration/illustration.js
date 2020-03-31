Vue.component('illustration', {
	props: ['image', 'save', 'modify'],
	template:
		`<div class="illustration">
			<photo :image="image" :size="'large'"></photo>
			<note :image="image" :save="save" :modify="modify" :description="image.description"></note>
		</div>`
})