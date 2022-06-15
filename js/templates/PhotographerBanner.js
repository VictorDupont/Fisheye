import ContactModal from "./ContactModal.js";

export default class PhotographerBanner {
	constructor(photographer) {
		this._photographer = photographer;
	}

	createBanner() {
		const banner = document.createElement("section");
		banner.classList.add("photographer-banner");

		banner.innerHTML = `
            <div class="photographer-banner__body">
                <div class="photographer-banner__info">
                    <h1 class="photographer-banner__name">${this._photographer.name}</h1>
                    <p class="photographer-banner__location">${this._photographer.location}</p>
                    <p class="photographer-banner__slogan">${this._photographer.tagline}</p>
                </div>
                <div class="photographer-banner__contact">
                    <button type="button" class="button button-contact" id="contact-btn" aria-label="Contact Me">Contactez-moi</button>
                </div>
                <figure class="card__figure">
                    <img src="public/img/Photographers_ID_Photos/${this._photographer.portrait}" alt="${this._photographer.name}">
                </figure>
            </div>
        `;

		const Template = new ContactModal(this._photographer);
		banner.append(Template.createContactModal());

		return banner;
	}
}
