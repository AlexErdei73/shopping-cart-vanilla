const title = document.querySelector("title");

const main = document.querySelector("main");

const components = ["home", "shopping", "cart"];
const nodes = [];

const baseURL = "/shopping-cart-vanilla";

const templates = document.querySelectorAll("template");
templates.forEach((temp, i) => {
  const component = temp.content.querySelector(`.${components[i]}`);
  nodes[i] = document.importNode(component, true);
});

main.appendChild(nodes[0]);

const navButtons = document.querySelectorAll("nav button");

function updateDOM(index) {
  const childNode = main.childNodes[0];
  if (childNode) childNode.remove();
  main.appendChild(nodes[index]);

  title.textContent = `${components[index]} page - Shopping Cart Vanilla`;

  document.querySelector("main h1").focus();
}

function handleNavButtonClick(event) {
  const button = event.currentTarget;
  if (button.id === "dropdown") {
    const dropDownMenu = document.querySelector("#dropdown-menu");
    dropDownMenu.classList.toggle("hide");
    return;
  }
  let index = Array.from(navButtons).indexOf(button);
  if (index > 3) index = index - 4;
  history.pushState({ index }, "", baseURL + button.getAttribute("href"));
  updateDOM(index);
}

navButtons.forEach((navButton) =>
  navButton.addEventListener("click", handleNavButtonClick)
);

addEventListener("popstate", (event) => {
  let index;
  if (!event.state) index = 0;
  else index = event.state.index;
  updateDOM(index);
});

addEventListener("beforeunload", (event) => {
  const URL = event.target.URL;
  const component = URL.slice(URL.lastIndexOf("/") + 1);
  let index = components.indexOf(component);
  if (component === baseURL) index = 0;
  history.replaceState({ index }, "", baseURL + "/");
  console.log("beforeunload, state: ", history.state);
});

window.addEventListener("DOMContentLoaded", function () {
  console.log("loading, state: ", history.state);
  if (history.state) {
    let index = history.state.index;
    let URL = `${baseURL}/${components[index]}`;
    history.replaceState({ index }, "", URL);
    updateDOM(index);
  }
});
