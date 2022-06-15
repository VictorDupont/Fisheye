// Likes and price

export default class PhotographerCounter {
	constructor(photographer, likes) {
		this._photographer = photographer;
		this._likes = likes;
	}

	createCounter() {
		const counter = document.createElement("aside");
		counter.classList.add("photographer-counter");

		counter.innerHTML = `
            <div class="photographer-counter__likes">
                <p>${this._likes}</p>
                <i class="fas fa-heart"></i>
            </div>
            <div class="photographer-counter__price">
                <p>${this._photographer.price}€ / jour</p>
            </div>
        `;

		return counter;
	}
}
