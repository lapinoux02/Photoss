Vue.component('navbar', {
	props: ['images'],
	template: 
		'<div class="navbar">'+
			'<div class="row">'+
				'<div class="col-xs-2 button">Acceuil</div>'+
				'<div class="col-xs-2 button">Albums</div>'+
				'<div class="col-xs-2 button">Ajout</div>'+
				'<div class="col-xs-2 col-xs-offset-4 button" v-on:click="this.import">Import</div>'+
			'</div>'+
		'</div>',
	methods: {
		import: function() {
			var that = this;
			// Création de l'input
	        var input = document.createElement('INPUT');
	        // Set du type d'input à 'file'
	        input.setAttribute('type', 'file');
	        // Rajout de l'event listener sur le change de l'input
	        input.addEventListener('change',
	            function() {
	                // Récupère les fichiers
	                var files = input.files;
	                // Création du fileReader
	                var fileReader = new FileReader();
	                // Lors du chargement du fichier
	                fileReader.onload = function() {
	                    // On lit le fichier
	                    var uploadedData = JSON.parse(fileReader.result);
	                    // On change les images
	                    that.images.splice(0, that.images.length, ...uploadedData);
	                };
	                // On lit le fichier
	                fileReader.readAsText(files[0]);
	            },
	            false
	        );
	        input.click();
		}
	}
});