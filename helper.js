export function importTemp(templateIndex, selector) {
  const temps = document.querySelectorAll("template");
  const temp = temps[6];
  const tempContent = temp.content.querySelector("tr");
  const contentNode = document.importNode(tempContent, true);
  return contentNode;
}
