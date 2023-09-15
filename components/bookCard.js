function bookCardFactory(bookState, parent) {
	const temp = document.querySelectorAll("template")[3];
	const bookCard = temp.content.querySelector(".book-card");
	const node = document.importNode(bookCard, true);

	const bookImg = node.querySelector(".book-card img");
	const priceOutputNode = node.querySelector(".book-card .price output");
	const bookNumberInput = node.querySelector(".book-card input");
	const buyMeButton = node.querySelector(".book-card button");

	function init() {
		bookImg.src = bookState.pictureURL;
		bookImg.alt = `${bookState.title} cover picture`;
		priceOutputNode.textContent = bookState.unitPrice;

		buyMeButton.addEventListener("click", function () {
			if (buyMeButton.textContent === "Buy Me!") {
				bookState.number = +bookNumberInput.value;
				bookState.totalPrice = +bookNumberInput.value * bookState.unitPrice;
				buyMeButton.textContent = "Remove";
			} else {
				bookState.number = 0;
				bookState.totalPrice = 0;
				buyMeButton.textContent = "Buy Me!";
			}
			parent.updateNumber();
		});
	}

	return {
		node,
		init,
	};
}

export default bookCardFactory;
