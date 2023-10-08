import { initBook } from "./bookCard.js";
import { appData } from "../index.js";

export function initBooks() {
  const shoppingNode = document.querySelector(".shopping");
  const node = document.createElement("div");
  node.id = "books-container";

  appData.books.forEach((bookState, i) => {
    const bookNode = initBook(bookState);
    node.appendChild(bookNode);
  });
  shoppingNode.appendChild(node);
}
