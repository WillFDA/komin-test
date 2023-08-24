const editButton = document.querySelector("#edit-title");
const title = document.querySelector("h1");
const savedTitle = localStorage.getItem("savedTitle");
if (savedTitle) {
  title.textContent = savedTitle;
}
console.log(title);

editButton.addEventListener("click", function () {
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.value = title.textContent;
  inputElement.classList = "h1-edit";
  title.replaceWith(inputElement);
  inputElement.focus();
  inputElement.addEventListener("keydown", function (event) {
    const inputContent = inputElement.value.trim();
    const enterPressed = event.key === "Enter";
    const escPressed = event.key === "Escape" || event.key === 27;

    if (escPressed) return inputElement.replaceWith(title);
    if (!enterPressed) return;

    const inputValide = inputContent.length >= 4 && inputContent.length <= 16;
    if (inputValide) {
      title.textContent = inputContent;
      localStorage.setItem("savedTitle", inputContent);
      inputElement.replaceWith(title);
    } else {
      alert("Le titre doit avoir entre 4 et 16 caractères");
    }
  });
});
