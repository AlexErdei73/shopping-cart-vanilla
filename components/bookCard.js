import { importTemp } from "../helper.js";
import { updateInvoice } from "./table.js";

export function initBook(bookData) {
  const bookNode = importTemp(3);
  const bookImg = bookNode.querySelector(".book-card img");
  const priceOutputNode = bookNode.querySelector(".book-card .price output");
  const bookNumberInput = bookNode.querySelector(".book-card input");
  const buyMeButton = bookNode.querySelector(".book-card button");

  bookImg.src = bookData.pictureURL;
  bookImg.alt = `${bookData.title} cover picture`;
  priceOutputNode.textContent = bookData.unitPrice;

  buyMeButton.addEventListener("click", function () {
    bookData.number += +bookNumberInput.value;
    bookData.totalPrice = bookData.number * bookData.unitPrice;
    updateInvoice();
  });

  return bookNode;
}
