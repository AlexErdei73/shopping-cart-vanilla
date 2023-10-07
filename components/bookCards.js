import bookCardFactory from "./bookCard.js";

function bookCardsFactory(appData, table) {
  const shoppingNode = document.querySelector(".shopping");
  const node = document.createElement("div");
  node.id = "books-container";

  const bookCards = [];

  function updateAll() {
    table.updateAll();
  }

  const instance = { updateAll };
  appData.books.forEach((bookState, i) => {
    const bookCard = bookCardFactory(bookState, instance);
    bookCard.init();
    bookCards[i] = bookCard;
    node.appendChild(bookCard.node);
  });
  shoppingNode.appendChild(node);

  return instance;
}

export default bookCardsFactory;
