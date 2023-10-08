import modalFactory from "./modal.js";
import { appData } from "../index.js";

const temps = document.querySelectorAll("template");
const tableRowTemp = temps[4];
const node = document.createElement("div");
node.classList.add("table-container");
const tableNode = document.createElement("table");
node.appendChild(tableNode);
const headRowTemp = temps[6];
const headRow = headRowTemp.content.querySelector("tr");
const headRowNode = document.importNode(headRow, true);
const lastRowTemp = temps[5];
const lastRow = lastRowTemp.content.querySelector("tr");
const lastRowNode = document.importNode(lastRow, true);
tableNode.appendChild(headRowNode);
let tableRows = [];
const buttonContainer = document.createElement("div");
buttonContainer.classList.add("button-container");
const button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Pay Now";
buttonContainer.appendChild(button);
node.appendChild(buttonContainer);
const modal = modalFactory("Thank you for shopping!", 7);
const okButton = document.querySelector(".modal-body button");
const cartNode = document.querySelector(".cart");
const totalNumberOutputNodes = document.querySelectorAll("nav output");

okButton.addEventListener("click", modal.closeModal);

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

export function updateAll() {
  updateNumber();
  updateTotalPrice();
  render();
}

function handleClickRemove(event) {
  const index = +event.target.id;
  appData.books[index].number = 0;
  appData.books[index].totalPrice = 0;
  updateAll();
}

function handleChangeNumber(event) {
  const index = +event.target.getAttribute("data-index");
  const value = +event.target.value;
  const min = +event.target.getAttribute("min");
  if (isNaN(value)) return;
  if (value < min) return;
  appData.books[index].number = Math.floor(value);
  appData.books[index].totalPrice = +(
    Math.floor(value) * appData.books[index].unitPrice
  ).toFixed(2);
  updateAll();
}

function createNumberRow(dataNode, book) {
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
      const tableRow = tableRowTemp.content.querySelector("tr");
      const tableRowNode = document.importNode(tableRow, true);
      for (let key in book) {
        const dataNode = tableRowNode.querySelector("." + key.toLowerCase());
        if (dataNode) {
          if (key === "number") createNumberRow(dataNode, book);
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

button.addEventListener("click", modal.openModal);

cartNode.appendChild(node);
