import Video from "../models/Video.js";
import Picture from "../models/Picture.js";

export default class MediaFactory {
	constructor(data) {
		if (data.video) return new Video(data);
		else if (data.image) return new Picture(data);
		else throw "Erreur...";
	}
}
