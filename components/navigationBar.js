const titleNode = document.querySelector("title");
const pageTitleLiveRegion = document.querySelector("#page-title-live-region");
const mainNode = document.querySelector("main");
const dropdownButton = document.querySelector("#dropdown");

const components = ["home", "shopping", "cart"];
const nodes = [];
let prevIndex;

const templates = document.querySelectorAll("template");
templates.forEach((temp, i) => {
  if (i > 2) return;
  const component = temp.content.querySelector(`.${components[i]}`);
  nodes[i] = document.importNode(component, true);
  nodes[i].classList.add("hidden");
  mainNode.appendChild(nodes[i]);
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
