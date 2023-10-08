import bookCardFactory from "./bookCard.js";
import { updateAll } from "./table.js";

function bookCardsFactory(appData) {
  const shoppingNode = document.querySelector(".shopping");
  const node = document.createElement("div");
  node.id = "books-container";

  const bookCards = [];

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
