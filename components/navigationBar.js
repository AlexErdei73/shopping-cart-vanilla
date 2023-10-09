import { importTemp } from "../helper.js";

const titleNode = document.querySelector("title");
const pageTitleLiveRegion = document.querySelector("#page-title-live-region");
const mainNode = document.querySelector("main");
const dropdownButton = document.querySelector("#dropdown");

const components = ["home", "shopping", "cart"];
const nodes = [];
let prevIndex;

components.forEach((_component, i) => {
  const node = importTemp(i);
  node.classList.add("hidden");
  nodes[i] = node;
  mainNode.appendChild(node);
});

function updateDOM(index) {
  if (prevIndex >= 0) nodes[prevIndex].classList.add("hidden");
  nodes[index].classList.remove("hidden");
  prevIndex = index;
  const title = `${components[index]} page - Shopping Cart Vanilla`;
  titleNode.textContent = title;
  pageTitleLiveRegion.textContent = title;

  document.querySelector("main h1").focus();
}

function hideDropdownMenu() {
  const dropDownMenu = document.querySelector("#dropdown-menu");
  dropDownMenu.classList.toggle("hidden");
}

function handleDropdownButtonClick(event) {
  const button = event.currentTarget;
  if (button.id === "dropdown") {
    hideDropdownMenu();
    return;
  }
}

export function showMainElement() {
  const component = window.location.hash.slice(1) || components[0];
  const index = components.indexOf(component);
  updateDOM(index);
  hideDropdownMenu();
}

dropdownButton.addEventListener("click", handleDropdownButtonClick);
window.addEventListener("hashchange", showMainElement);
