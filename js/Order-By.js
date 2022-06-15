// Filter class

export default class OrderBy {
	static init() {
		function sortedToDOM(array, destination) {
			array.forEach((arrayElement) => {
				destination.appendChild(arrayElement);
			});
		}
		const orderByButton = document.querySelector("#orderBy");
		const gallery = document.querySelector("#media-cards-deck");
		const galleryContent = Array.from(document.querySelectorAll(".picture-card"));

		orderByButton.addEventListener("click", (e) => {
			switch (e.target.value) {
				case "Popularité":
					gallery.innerHTML = "";

					galleryContent.sort(
						(a, b) =>
							b.childNodes[3].lastElementChild.textContent -
							a.childNodes[3].lastElementChild.textContent
					);

					sortedToDOM(galleryContent, gallery);
					break;

				case "Date":
					gallery.innerHTML = "";

					galleryContent.sort((a, b) =>
						b.childNodes[5].dateTime.localeCompare(a.childNodes[5].dateTime)
					);

					sortedToDOM(galleryContent, gallery);
					break;

				case "Titre":
					gallery.innerHTML = "";

					galleryContent.sort((a, b) =>
						a.childNodes[3].firstChild.nextSibling.textContent.localeCompare(
							b.childNodes[3].firstChild.nextSibling.textContent
						)
					);

					sortedToDOM(galleryContent, gallery);
					break;

				default:
					break;
			}
		});
	}
}
