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

function handleNavButtonClick(event) {
	const button = event.target;
	const index = Array.from(navButtons).indexOf(button);
	history.pushState({ index }, "", button.getAttribute("href"));
	const childNode = main.childNodes[0];
	childNode.remove();
	main.appendChild(nodes[index]);
}

navButtons.forEach((navButton) =>
	navButton.addEventListener("click", handleNavButtonClick)
);
