import { initModal, openModal, closeModal } from "./modal.js";
import { appData } from "../index.js";
import { importTemp } from "../helper.js";

const node = document.createElement("div");
node.classList.add("table-container");
const tableNode = document.createElement("table");
node.appendChild(tableNode);
const headRowNode = importTemp(6);
const lastRowNode = importTemp(5);
tableNode.appendChild(headRowNode);
let tableRows = [];
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
const button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Pay Now";
buttonContainer.appendChild(button);
node.appendChild(buttonContainer);
initModal("Thank you for shopping!", 7);
const okButton = document.querySelector(".modal-body button");
const cartNode = document.querySelector(".cart");
const totalNumberOutputNodes = document.querySelectorAll("nav output");

okButton.addEventListener("click", closeModal);

function updateNumber() {
  appData.totalNumber = appData.books
    .map((book) => book.number)
    .reduce((prevNumber, number) => prevNumber + number, 0);
  totalNumberOutputNodes.forEach((outputNode) => {
    outputNode.textContent = appData.totalNumber;
  });
}

function updateTotalPrice() {
  appData.totalPrice = appData.books
    .map((book) => book.totalPrice)
    .reduce((prevPrice, price) => prevPrice + price, 0);
}

export function updateInvoice() {
  updateNumber();
  updateTotalPrice();
  render();
}

function handleClickRemove(event) {
  const index = +event.target.id;
  appData.books[index].number = 0;
  appData.books[index].totalPrice = 0;
  updateInvoice();
}

function handleChangeNumber(event) {
  const index = +event.target.getAttribute("data-index");
  let value = +event.target.value;
  const min = +event.target.getAttribute("min");
  if (isNaN(value)) return;
  if (value < min) {
    event.target.value = 1;
    value = 1;
  }
  appData.books[index].number = Math.floor(value);
  appData.books[index].totalPrice = +(
    Math.floor(value) * appData.books[index].unitPrice
  ).toFixed(2);
  updateInvoice();
}

function createNumberCell(dataNode, book) {
  const input = dataNode.querySelector("input");
  input.value = book.number;
  input.setAttribute("data-index", appData.books.indexOf(book));
  input.addEventListener("change", handleChangeNumber);
  const button = dataNode.querySelector("button");
  button.id = appData.books.indexOf(book);
  button.addEventListener("click", handleClickRemove);
}

function render() {
  removeNodes();
  appData.books
    .filter((book) => book.number > 0)
    .forEach((book) => {
      const tableRowNode = importTemp(4);
      for (let key in book) {
        const dataNode = tableRowNode.querySelector("." + key.toLowerCase());
        if (dataNode) {
          if (key === "number") createNumberCell(dataNode, book);
          else dataNode.textContent = book[key];
        }
      }
      tableRows.push(tableRowNode);
    });
  const totalPriceNode = lastRowNode.querySelector(".totalprice");
  totalPriceNode.textContent = appData.totalPrice.toFixed(2);
  tableRows.push(lastRowNode);
  appendRows();
}

function removeNodes() {
  tableRows.forEach((rowNode) => {
    rowNode.remove();
  });
  tableRows = [];
}

function appendRows() {
  tableRows.forEach((rowNode) => tableNode.appendChild(rowNode));
}

button.addEventListener("click", openModal);

cartNode.appendChild(node);
