import { importTemp } from "../helper.js";

const cover = document.querySelector(".cover");
const dialog = document.querySelector("dialog");

export function initModal(headerText, childrenIndex) {
  const headOutput = dialog.querySelector(".head output");
  const closeButton = dialog.querySelector(".head button.close");
  headOutput.textContent = headerText;
  const body = document.querySelector(".body");
  const childrenNode = importTemp(7);
  body.appendChild(childrenNode);

  dialog.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) return;
    closeModal();
  });

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal();
  });

  closeButton.addEventListener("click", closeModal);
}

export let isOpen = false;

export function openModal() {
  dialog.showModal();
  dialog.classList.add("animate");
  cover.classList.add("open");
  isOpen = true;
  setTimeout(() => {
    dialog.classList.remove("animate");
  }, 600);
}

export function closeModal() {
  dialog.classList.add("animate-back");
  setTimeout(() => {
    dialog.close();
    dialog.classList.remove("animate-back");
    cover.classList.remove("open");
    isOpen = false;
  }, 600);
}
