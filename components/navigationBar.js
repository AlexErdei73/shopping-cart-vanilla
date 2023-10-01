function navigationBarFactory() {
  const titleNode = document.querySelector("title");
  const pageTitleLiveRegion = document.querySelector("#page-title-live-region");
  const mainNode = document.querySelector("main");
  const dropdownButton = document.querySelector("#dropdown");

  const components = ["home", "shopping", "cart"];
  const nodes = [];
  let nodesToAppendStored;
  let tableStored;

  const templates = document.querySelectorAll("template");
  templates.forEach((temp, i) => {
    if (i > 2) return;
    const component = temp.content.querySelector(`.${components[i]}`);
    nodes[i] = document.importNode(component, true);
  });

  function updateDOM(index, nodesToAppend) {
    const childNode = mainNode.childNodes[0];
    if (childNode) childNode.remove();
    mainNode.appendChild(nodes[index]);
    if (nodesToAppend[index]) {
      nodes[index].appendChild(nodesToAppend[index]);
      nodesToAppend[index] = null;
    }
    const title = `${components[index]} page - Shopping Cart Vanilla`;
    titleNode.textContent = title;
    pageTitleLiveRegion.textContent = title;

    document.querySelector("main h1").focus();
  }

  function handleDropdownButtonClick(event) {
    const button = event.currentTarget;
    if (button.id === "dropdown") {
      const dropDownMenu = document.querySelector("#dropdown-menu");
      dropDownMenu.classList.toggle("hidden");
      return;
    }
  }

  function showMainElement(nodesToAppend = [], table = null) {
    if (nodesToAppend.length > 0) nodesToAppendStored = nodesToAppend;
    if (table) tableStored = table;
    const component = window.location.hash.slice(1) || components[0];
    const index = components.indexOf(component);
    updateDOM(index, nodesToAppendStored);
    if (index === 2) tableStored.render();
  }

  dropdownButton.addEventListener("click", handleDropdownButtonClick);
  window.addEventListener("hashchange", showMainElement);

  return { showMainElement };
}

const navigationBar = navigationBarFactory();

export default navigationBar;
