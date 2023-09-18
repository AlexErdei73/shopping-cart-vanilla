import navigationBar from "./components/navigationBar.js";
import bookCardsFactory from "./components/bookCards.js";

const state = {
  books: [
    {
      title: "Mathematical Mathods In The Physical Sciences",
      author: "Mary L. Boas",
      pictureURL: "./images/books/boas.b08a50df.jpeg",
      unitPrice: 65,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "./images/books/feynman.jpeg",
      unitPrice: 111.99,
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
