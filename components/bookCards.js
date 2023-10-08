import bookCardFactory from "./bookCard.js";
import { appData } from "../index.js";

export function initBooks() {
  const shoppingNode = document.querySelector(".shopping");
  const node = document.createElement("div");
  node.id = "books-container";

  const bookCards = [];

  appData.books.forEach((bookState, i) => {
    const bookCard = bookCardFactory(bookState, i);
    bookCard.init();
    bookCards[i] = bookCard;
    node.appendChild(bookCard.node);
  });
  shoppingNode.appendChild(node);
}
