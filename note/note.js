Vue.component('note', {
	props: ['image', 'alterable', 'save'],
	template :
		`<div>
			<ul class="note">
				<li>Lieu : <input v-model="image.lieu" type="text" v-if="alterable" class="note-input"/><span v-else>{{image.lieu}}</span></li>
				<li>Date : <input v-model="image.date" type="text" v-if="alterable" class="note-input"/><span v-else>{{image.date}}</span></li>
				<li>Evenement : <input v-model="image.evenement" type="text" v-if="alterable" class="note-input"/><span v-else>{{image.evenement}}</span></li>
				<li>Description : <input v-model="image.description" type="text" v-if="alterable" class="note-input"/><span v-else>{{image.description}}</span></li>
				<li>Album : <input v-model="image.album" type="text" v-if="alterable" class="note-input"/><span v-else>{{image.album}}</span></li>
			</ul>
			<div v-if="save" class="button" v-on:click="save">Enregistrer</div>
		</div>`,
	mounted: function() {
		this.$el.style.transform = 'rotate(' + MATH_UTILS.randomRotate() + 'deg)';
	}
})