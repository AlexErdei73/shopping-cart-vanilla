import { updateAll } from "./table.js";

function bookCardFactory(bookData) {
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
      bookData.number += +bookNumberInput.value;
      bookData.totalPrice = bookData.number * bookData.unitPrice;
      updateAll();
    });
  }

  return {
    node,
    init,
  };
}

export default bookCardFactory;
