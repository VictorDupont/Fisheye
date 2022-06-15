import { MediaApi } from "./api/Api.js";
import MediaFactory from "./factories/MediaFactory.js";
import MediaCard from "./templates/MediaCard.js";
import Ligthbox from "./Lightbox.js";
import Likes from "./Likes.js";
import OrderBy from "./Order-By.js";

export default class Medias {
	constructor() {
		this.mainContent = document.getElementById("media-cards-deck");
		this.mediasApi = new MediaApi("data/photographers.json");
	}

	async launchMedias() {
		const mediasData = await this.mediasApi.getMedias();
		let pageUrl = new URL(window.location.href);
		const id = Number(pageUrl.searchParams.get("id"));
		mediasData
			.map((media) => new MediaFactory(media))
			.forEach((media) => {
				if (id === media.photographerId) {
					const Template = new MediaCard(media);
					this.mainContent.append(Template.createMediaCard());
				}
			});

		Ligthbox.init();
		Likes.init();
		OrderBy.init();
	}
}
