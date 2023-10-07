import modalFactory from "./modal.js";

function tableFactory(appData) {
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

  okButton.addEventListener("click", modal.closeModal);

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
            if (key === "number") {
              const input = dataNode.querySelector("input");
              input.value = book[key];
            } else dataNode.textContent = book[key];
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
  return { render };
}

export default tableFactory;
