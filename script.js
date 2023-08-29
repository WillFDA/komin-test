const editButton = document.querySelector("#edit-title");
const title = document.querySelector("h1");
const savedTitle = localStorage.getItem("savedTitle");
if (savedTitle) {
  title.textContent = savedTitle;
}
// console.log(title);

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

    const inputValide = inputContent.length >= 4 && inputContent.length <= 24;
    if (inputValide) {
      title.textContent = inputContent;
      localStorage.setItem("savedTitle", inputContent);
      inputElement.replaceWith(title);
    } else {
      alert("Le titre doit avoir entre 4 et 24 caractères");
    }
  });
});

const data = [
  {
    status: "Onboarding",
    time: "18 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure001.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 2m",
  },
  {
    status: "Onboarding",
    time: "13 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure002.png",
    figCaptionTitle: "Sales & Marketing that really works !",
    figCaptionDate: "il y a 7j",
  },
  {
    status: "Onboarding",
    time: "11 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure002.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 7j",
  },
  {
    status: "Onboarding",
    time: "25 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure003.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 2j",
  },
  {
    status: "Onboarding",
    time: "25 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure004.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 4j",
  },
  {
    status: "Onboarding",
    time: "25 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure005.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 4j",
  },
  {
    status: "Onboarding",
    time: "35 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure006.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 1j",
  },
  {
    status: "Onboarding",
    time: "35 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure007.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 1j",
  },
  {
    status: "Onboarding",
    time: "5 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure008.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 2h",
  },
  {
    status: "Onboarding",
    time: "55 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure009.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 4h",
  },
  {
    status: "Onboarding",
    time: "45 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure010.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 1j",
  },
  {
    status: "Onboarding",
    time: "45 min",
    description:
      "Description : Roadbook type des procédures de recrutement des agences du Groupe Onsite",
    thumbnail: "./assets/figure011.png",
    figCaptionTitle:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    figCaptionDate: "il y a 1j",
  },
];

const section = document.querySelector("section");
console.log(section);
data.forEach((figureData) => {
  const figureHTML = `<figure>
  <div class="img-container">
    <div class="overlay">
      <div class="overlay-infos">
        <h3>${figureData.status}</h3>
        <div class="overlay-timer-box">
          <img src="./assets/timer-icon.svg" alt="Timer icon" />
          <span class="video-time">${figureData.time}</span>
        </div>
      </div>

      <p class="overlay-description">
      ${figureData.description}
      </p>
    </div>
    <img src='${figureData.thumbnail}' alt="Thumbnail" />
  </div>
  <figcaption>
    <h2>
    ${figureData.figCaptionTitle}
    </h2>
    <p class="date-description">${figureData.figCaptionDate}</p>
  </figcaption>
</figure>`;
  section.insertAdjacentHTML("beforeend", figureHTML);
});
