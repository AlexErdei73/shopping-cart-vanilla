import navigationBar from "./components/navigationBar.js";

const state = {
  books: [
    {
      title: "",
      author: "",
      pictureURL: "",
      unitPrice: 0,
      number: 0,
      totalPrice: 0,
    },
  ],
  totalPrice: 0,
};

navigationBar.showMainElement();
