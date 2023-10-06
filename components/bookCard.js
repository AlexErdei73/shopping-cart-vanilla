function bookCardFactory(bookData, parent) {
	const temp = document.querySelectorAll("template")[3];
	const bookCard = temp.content.querySelector(".book-card");
	const node = document.importNode(bookCard, true);

	const bookImg = node.querySelector(".book-card img");
	const priceOutputNode = node.querySelector(".book-card .price output");
	const bookNumberInput = node.querySelector(".book-card input");
	const buyMeButton = node.querySelector(".book-card button");

	function init() {
		bookImg.src = bookData.pictureURL;
		bookImg.alt = `${bookData.title} cover picture`;
		priceOutputNode.textContent = bookData.unitPrice;

		buyMeButton.addEventListener("click", function () {
			if (buyMeButton.textContent === "Buy Me!") {
				bookData.number = +bookNumberInput.value;
				bookData.totalPrice = +bookNumberInput.value * bookData.unitPrice;
				buyMeButton.textContent = "Remove";
			} else {
				bookData.number = 0;
				bookData.totalPrice = 0;
				buyMeButton.textContent = "Buy Me!";
			}
			parent.updateAll();
		});
	}

	return {
		node,
		init,
	};
}

export default bookCardFactory;
