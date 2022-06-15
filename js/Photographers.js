import { PhotographerApi } from "./api/Api.js";
import Photographer from "./models/Photographer.js";
import PhotographerCard from "./templates/PhotographerCard.js";

export default class Photographers {
	constructor() {
		this.mainContent = document.getElementById("main-content");
		this.photographersApi = new PhotographerApi("data/photographers.json");
	}

	async launchPhotographers() {
		const photographersData = await this.photographersApi.getPhotographers();

		photographersData
			.map((photographer) => new Photographer(photographer))
			.forEach((photographer) => {
				const Template = new PhotographerCard(photographer);
				this.mainContent.appendChild(Template.createCard());
			});
	}
}
