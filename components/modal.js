function modalFactory(headerText, childrenIndex) {
  const cover = document.querySelector(".cover");
  const dialog = document.querySelector("dialog");
  const headOutput = dialog.querySelector(".head output");
  const closeButton = dialog.querySelector(".head button.close");
  headOutput.textContent = headerText;
  const body = document.querySelector(".body");
  const temps = document.querySelectorAll("template");
  const children = temps[childrenIndex].content.querySelector(".modal-body");
  const childrenNode = document.importNode(children, true);
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

  let isOpen = false;

  function openModal() {
    dialog.showModal();
    dialog.classList.add("animate");
    cover.classList.add("open");
    isOpen = true;
    setTimeout(() => {
      dialog.classList.remove("animate");
    }, 600);
  }

  function closeModal() {
    dialog.classList.add("animate-back");
    setTimeout(() => {
      dialog.close();
      dialog.classList.remove("animate-back");
      cover.classList.remove("open");
      isOpen = false;
    }, 600);
  }

  return { isOpen, openModal, closeModal };
}

export default modalFactory;
