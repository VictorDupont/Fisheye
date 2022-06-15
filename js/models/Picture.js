// Picture class which makes a picture

export default class Picture {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._date = data.date;
		this._title = data.title;
		this._image = data.image;
		this._likes = data.likes;
	}

	get id() {
		return this._id;
	}
	get photographerId() {
		return this._photographerId;
	}
	get date() {
		return this._date;
	}
	get title() {
		return this._title;
	}
	get source() {
		return `<figure class="picture-card__image">
                    <a href="public/img/${this._photographerId}/${this._image}" aria-label="Lilac breasted roller, closeup view">
                        <img src="public/img/${this._photographerId}/${this._image}" srcset="public/img/${this._photographerId}/${this._image}" sizes="200px" alt="Photographie - ${this._title}">
                    </a>
                </figure>`;
	}
	get likes() {
		return this._likes;
	}
}
