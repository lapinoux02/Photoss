var proxy = {
	images: {},
	async getImage(url) {
		if (!this.images[url]) {
			this.images[url] = (await axios.post(`${url}`, {idToken: await getToken()})).data;
		}
		return this.images[url]
	}
}