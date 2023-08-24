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
    if (event.key === "Enter") {
      if (inputElement.value.trim() === "") {
        alert("Le titre ne peut pas être vide");
        return;
      }
      title.textContent = inputElement.value;
      localStorage.setItem("savedTitle", inputElement.value);
      inputElement.replaceWith(title);
    }
    if (event.key === "Escape" || event.key === 27) {
      inputElement.replaceWith(title);
    }
  });
});
