const BASE_URL = CONF.BASE_URL;

let getToken = async () => await firebase.auth().currentUser.getIdToken(true);

const REST_CLIENT = {
	async isUserPrio() {
		return (await axios.post(`${BASE_URL}/users/isUserPrio`, {idToken: await getToken()})).data
	},
	async getPhoto(album, photo) {
		return (await axios.post(`${BASE_URL}/albums/${album}/photos/${photo}`, {idToken: await getToken()})).data;
	},
	async getAlbums() {
		return (await axios.post(`${BASE_URL}/albums/data`, {idToken: await getToken()})).data;
	},
	async getSampleAlbumPhotosData(album) {
		return (await axios.post(`${BASE_URL}/albums/${album}/photos/sample/data`, {idToken: await getToken()})).data
	},
	async getAlbumPhotosData(album) {
		return (await axios.post(`${BASE_URL}/albums/${album}/photos/data`, {idToken: await getToken()})).data;
	},
	async getAlbumPhotoData(album, photo) {
		return (await axios.post(`${BASE_URL}/albums/${album}/photos/${photo}/data`, {idToken: await getToken()})).data;
	},
	async getRandomImageData() {
		return (await axios.post(`${BASE_URL}/random/data`, {idToken: await getToken()})).data;
	},
	async getUnsortedImagesData() {
		return (await axios.post(`${BASE_URL}/unsorted`, {idToken: await getToken()})).data;
	},
	async saveImage(image) {
		return (await axios.post(`${BASE_URL}/photo`, {idToken: await getToken(), image}));
	},
	async unsortImage(image) {
		return (await axios.post(`${BASE_URL}/photo/unsort`, {idToken: await getToken(), image}));
	},
	async addFile(formData) {
		formData.append('idToken', await getToken());
		return (await axios.post(`${BASE_URL}/add`, formData, {
			headers: {
                'Content-Type': 'multipart/form-data'
            }
		}));
	},
	async deleteImage(image) {
		return (await axios.post(`${BASE_URL}/photo/delete`, {idToken: await getToken(), image}));
	}
}
