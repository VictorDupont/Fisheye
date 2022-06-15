import { PhotographerApi, MediaApi } from "./api/Api.js";
import Photographer from "./models/Photographer.js";
import PhotographerBanner from "./templates/PhotographerBanner.js";
import PhotographerCounter from "./templates/PhotographerCounter.js";

export default class Banner {
	constructor() {
		this.mainContent = document.querySelector("main");
		this.photographersApi = new PhotographerApi("data/photographers.json");
		this.mediasApi = new MediaApi("data/photographers.json");
	}

	async launchBanner() {
		const photographersData = await this.photographersApi.getPhotographers();
		const mediasData = await this.mediasApi.getMedias();

		let numberOfLikes = 0;
		photographersData
			.map((photographer) => new Photographer(photographer))
			.forEach((photographer) => {
				if (id === photographer.id) {
					const Template = new PhotographerBanner(photographer);
					this.mainContent.prepend(Template.createBanner());

					mediasData.forEach((media) => {
						if (id === media.photographerId) {
							numberOfLikes += media.likes;
						}
					});

					const counter = new PhotographerCounter(photographer, numberOfLikes);
					this.mainContent.prepend(counter.createCounter());
				}
			});

		const contactButton = document.getElementById("contact-btn");
		contactButton.addEventListener("click", displayModal);

		const submitButtonModal = document.getElementById("contact-submit-button");
		submitButtonModal.addEventListener("click", (e) => {
			e.preventDefault();

			const firstName = document.querySelector("#firstName");
			const lastName = document.querySelector("#lastName");
			const email = document.querySelector("#email");
			const userTextArea = document.querySelector("#userTextArea");
			console.log(firstName.value);
			console.log(lastName.value);
			console.log(email.value);
			console.log(userTextArea.value);
		});
	}
}

let pageUrl = new URL(window.location.href);
const id = Number(pageUrl.searchParams.get("id"));
const contactButtonSmall = document.getElementById("contact-btn--small");
contactButtonSmall.addEventListener("click", displayModal);

function displayModal() {
	const modal = document.getElementById("contact-modal");
	modal.classList.remove("sr-only");
	modal.style.display = "flex";
	document.querySelector("header").setAttribute("aria-hidden", "true");
	document.querySelector("main").setAttribute("aria-hidden", "true");
}
