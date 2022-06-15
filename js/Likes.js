// Like class and incrementation

export default class Likes {
	static init() {
		let counter = 0;
		function liking() {
			const counterElement = this.previousElementSibling;
			const counterValue = Number(counterElement.innerText);
			const totalLikesElement = document.querySelector(".photographer-counter__likes p");
			const totalLikesValue = Number(totalLikesElement.textContent);
			increment(counterElement, counterValue, counter);
			increment(totalLikesElement, totalLikesValue, counter);
			counter = counter <= 0 ? ++counter : --counter;
		}

		function increment(element, value, counter) {
			if (counter === 0) return (element.textContent = ++value);
			else return (element.textContent = --value);
		}

		const likes = document.querySelectorAll(".picture-card__counter-like-action");
		likes.forEach((like) => like.addEventListener("click", liking));
	}
}
