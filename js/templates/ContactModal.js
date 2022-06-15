// Contact part, create a modal with infos about a request

export default class ContactModal {
	constructor(photographer) {
		this._photographer = photographer;
	}

	createContactModal() {
		const contactModal = document.createElement("aside");
		contactModal.setAttribute("id", "contact-modal");
		contactModal.classList.add("contact-form");
		contactModal.classList.add("sr-only");
		contactModal.setAttribute("role", "dialog");
		contactModal.setAttribute("aria-hidden", "false");

		contactModal.innerHTML = `
            <div class="contact-form__container" role="group">
                <header class="contact-form__header">
                    <div class="contact-form__info">
                        <h2 class="contact-form__title">Contactez-moi</h2>
                        <p class="contact-form__recipient">${this._photographer.name}<p>
                    </div>
                    <button class="contact-form__close" id="close-contact-modal-button" aria-label="Close Contact form">
                        <i class="fas fa-times "></i>
                    </button>
                </header>
                <form class="contact-form__body">
                    <div class="input-group">
                        <label class="input-group__label">Prénom</label>
                        <input type="text" class="input-group__input" aria-label="First name" id="firstName" required/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Nom</label>
                        <input type="text" class="input-group__input" aria-label="Last name" id="lastName"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Email</label>
                        <input type="email" class="input-group__input" aria-label="Email" id="email"/>
                    </div>
                    <div class="input-group">
                        <label class="input-group__label">Votre Message</label>
                        <textarea class="input-group__input--textarea"  aria-label="Your message" id="userTextArea"></textarea>
                    </div>
                    <button type="submit" class="button button-contact button-contact--small" id="contact-submit-button" aria-label="Send">Envoyer</button>
                </form>
            </div>
        `;

		//EVENT Closing Modal--contact form
		contactModal.querySelector("#close-contact-modal-button").addEventListener("click", () => {
			contactModal.classList.add("sr-only");
			contactModal.setAttribute("aria-hidden", "true");
			contactModal.style.display = "none";
			document.querySelector("header").setAttribute("aria-hidden", "false");
			document.querySelector("main").setAttribute("aria-hidden", "false");
		});

		document.body.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				contactModal.classList.add("sr-only");
				contactModal.setAttribute("aria-hidden", "true");
				contactModal.style.display = "none";
				document.querySelector("header").setAttribute("aria-hidden", "false");
				document.querySelector("main").setAttribute("aria-hidden", "false");
			}
		});

		//LAUNCH
		return contactModal;
	}
}
