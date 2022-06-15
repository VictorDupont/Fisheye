export class Api {
	constructor(url) {
		this._url = url;
	}

	async get() {
		return fetch(this._url)
			.then((response) => response.json())
			.then((response) => response)
			.catch((error) => console.log("Une erreur est survenue", error));
	}
}

export class PhotographerApi extends Api {
	constructor(url) {
		super(url);
	}

	async getPhotographers() {
		const data = await this.get();
		return data.photographers;
	}
}
export class MediaApi extends Api {
	constructor(url) {
		super(url);
	}

	async getMedias() {
		const data = await this.get();
		return data.media;
	}
}
