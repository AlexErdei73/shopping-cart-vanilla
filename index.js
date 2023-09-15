import navigationBar from "./components/navigationBar.js";

const state = {
  books: [
    {
      title: "Mathematical Mathods In The Physical Sciences",
      author: "Mary L. Boas",
      pictureURL: "../images/books/boas.b08a50df.jpeg",
      unitPrice: 65,
      number: 0,
      totalPrice: 0,
    },
    {
      title: "The Feynman Lectures On Physics",
      author: "Richard P. Feynman",
      pictureURL: "../images/books/feynman.jpeg",
      unitPrice: 111.99,
      number: 0,
      totalPrice: 0,
    },
  ],
  totalPrice: 0,
};

navigationBar.showMainElement();
