const BASE_URL = 'http://localhost:8001';

const REST_CLIENT = {
	async getAlbums() {
		return (await axios.get(`${BASE_URL}/albums/data`)).data;
	},
	async getSampleAlbumPhotosData(album) {
		return (await axios.get(`${BASE_URL}/albums/${album}/photos/sample/data`)).data
	},
	async getAlbumPhotosData(album) {
		return (await axios.get(`${BASE_URL}/albums/${album}/photos/data`)).data;
	},
	async getAlbumPhotoData(album, photo) {
		return (await axios.get(`${BASE_URL}/albums/${album}/photos/${photo}/data`)).data;
	},
	async getRandomImageData() {
		return (await axios.get(`${BASE_URL}/random/data`)).data;
	},
	async getUnsortedImagesData() {
		return (await axios.get(`${BASE_URL}/unsorted`)).data;
	},
	async saveImage(image) {
		const idToken = await firebase.auth().currentUser.getIdToken(true);
		return (await axios.post(`${BASE_URL}/photo`, {idToken, image}));
	},
	async unsortImage(image) {
		const idToken = await firebase.auth().currentUser.getIdToken(true);
		return (await axios.post(`${BASE_URL}/photo/unsort`, {idToken, image}));
	},
	async addFile(formData) {
		const idToken = await firebase.auth().currentUser.getIdToken(true);
		formData.append('idToken', idToken);
		return (await axios.post(`${BASE_URL}/add`, formData, {
			headers: {
                'Content-Type': 'multipart/form-data'
            }
		}));
	}
}