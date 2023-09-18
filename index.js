import navigationBar from "./components/navigationBar.js";
import bookCardsFactory from "./components/bookCards.js";

const state = {
	books: [
		{
			title: "Mathematical Mathods in the Physical Sciences",
			author: "Mary L. Boas",
			pictureURL: "./images/books/boas.b08a50df.jpeg",
			unitPrice: 65,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "The Feynman Lectures on Physics",
			author: "Richard P. Feynman",
			pictureURL: "./images/books/feynman.jpeg",
			unitPrice: 111.99,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Classical Mechanics",
			author: "John R. Taylor",
			pictureURL: "./images/books/taylor.59259a68.jpeg",
			unitPrice: 61.99,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Introduction to Electrodynamics",
			author: "David J. Griffiths",
			pictureURL: "./images/books/griffithsed.78479630.jpeg",
			unitPrice: 48.92,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Introduction to Quantum Mechanics",
			author: "David J. Griffiths",
			pictureURL: "./images/books/griffithsqm.jpeg",
			unitPrice: 48.92,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Introduction to Elementary Particles",
			author: "David J. Griffiths",
			pictureURL: "./images/books/griffithsparticles.jpeg",
			unitPrice: 55.01,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Student Friendly Quantum Field Theory",
			author: "Robert D. Klauber",
			pictureURL: "./images/books/klauber.c284edcf.jpeg",
			unitPrice: 62.97,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Fundamentals in Statistical and Thermal Physics",
			author: "Frederick Reif",
			pictureURL: "./images/books/reif.5b66f674.jpeg",
			unitPrice: 57.89,
			number: 0,
			totalPrice: 0,
		},
		{
			title: "Relativity, Gravitation and Cosmology",
			author: "Robert J. A. Lambourne",
			pictureURL: "./images/books/lambourne.da49abeb.jpeg",
			unitPrice: 47.31,
			number: 0,
			totalPrice: 0,
		},
	],
	totalNumber: 0,
	totalPrice: 0,
};

function getZoom() {
	const div = document.createElement("div");
	div.style = "font-size: 16px";
	document.body.appendChild(div);
	const computedFontSize = window
		.getComputedStyle(div)
		.getPropertyValue("font-size");
	const indexPx = computedFontSize.indexOf("px");
	const zoom = +computedFontSize.slice(0, indexPx) / 16;
	div.remove();
	return zoom;
}

function getBaseFontsize() {
	const zoom = getZoom();
	const totalFontSizeStr = window
		.getComputedStyle(document.documentElement)
		.getPropertyValue("font-size");
	const indexPx = totalFontSizeStr.indexOf("px");
	const totalFontSize = +totalFontSizeStr.slice(0, indexPx);
	return totalFontSize / zoom;
}

const root = document.querySelector(":root");
root.style = `--total-zoom: ${
	(getBaseFontsize() * getZoom()) / 16
}; --zoom: ${getZoom()}`;

const bookCards = bookCardsFactory(state);
navigationBar.showMainElement([null, bookCards.node, null]);
