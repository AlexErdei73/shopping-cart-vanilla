import bookCardFactory from "./bookCard.js";

function bookCardsFactory(state) {
	const node = document.createElement("div");
	node.id = "books-container";
	const totalNumberOutputNodes = document.querySelectorAll("nav output");

	function updateNumber() {
		state.totalNumber = state.books
			.map((book) => book.number)
			.reduce((prevNumber, number) => prevNumber + number, 0);
		totalNumberOutputNodes.forEach((outputNode) => {
			outputNode.textContent = state.totalNumber;
		});
	}

	function updateTotalPrice() {
		state.totalPrice = state.books
			.map((book) => book.totalPrice)
			.reduce((prevPrice, price) => prevPrice + price, 0);
	}

	function updateAll() {
		updateNumber();
		updateTotalPrice();
	}

	const bookCards = [];

	const instance = { node, updateAll };
	state.books.forEach((bookState, i) => {
		const bookCard = bookCardFactory(bookState, instance);
		bookCard.init();
		bookCards[i] = bookCard;
		node.appendChild(bookCard.node);
	});

	return instance;
}

export default bookCardsFactory;
