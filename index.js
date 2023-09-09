const title = document.querySelector("title");
const main = document.querySelector("main");
const dropdownButton = document.querySelector("#dropdown");

const components = ["home", "shopping", "cart"];
const nodes = [];

const templates = document.querySelectorAll("template");
templates.forEach((temp, i) => {
  const component = temp.content.querySelector(`.${components[i]}`);
  nodes[i] = document.importNode(component, true);
});

function updateDOM(index) {
  const childNode = main.childNodes[0];
  if (childNode) childNode.remove();
  main.appendChild(nodes[index]);

  title.textContent = `${components[index]} page - Shopping Cart Vanilla`;

  document.querySelector("main h1").focus();
}

function handleDropdownButtonClick(event) {
  const button = event.currentTarget;
  if (button.id === "dropdown") {
    const dropDownMenu = document.querySelector("#dropdown-menu");
    dropDownMenu.classList.toggle("hide");
    return;
  }
}

function showMainElement() {
  const component = window.location.hash.slice(1) || components[0];
  const index = components.indexOf(component);
  updateDOM(index);
}

dropdownButton.addEventListener("click", handleDropdownButtonClick);
window.addEventListener("hashchange", showMainElement);
showMainElement();
