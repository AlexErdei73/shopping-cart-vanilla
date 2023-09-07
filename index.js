const main = document.querySelector("main");

const components = ["home", "shopping", "cart"];
const nodes = [];

const templates = document.querySelectorAll("template");
templates.forEach((temp, i) => {
  const component = temp.content.querySelector(`.${components[i]}`);
  nodes[i] = document.importNode(component, true);
});

main.appendChild(nodes[0]);

const navButtons = document.querySelectorAll("nav button");

function updateDOM(index) {
  console.log(index);
  const childNode = main.childNodes[0];
  childNode.remove();
  main.appendChild(nodes[index]);
}

function handleNavButtonClick(event) {
  const button = event.target;
  if (button.id === "dropdown") {
    const dropDownMenu = document.querySelector("#dropdown-menu");
    dropDownMenu.classList.toggle("hide");
    return;
  }
  let index = Array.from(navButtons).indexOf(button);
  if (index > 3) index = index - 4;
  history.pushState({ index }, "", button.getAttribute("href"));
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
  const index = components.indexOf(component);
  history.replaceState({ index }, "", "/");
});

if (history.state) {
  const index = history.state.index;
  if (index > 0) {
    history.replaceState({ index }, "", `/${components[index]}`);
    updateDOM(index);
  }
}
