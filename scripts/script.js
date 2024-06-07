const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const picNames = initialCards.map(function (item) {
  return item.name;
});

const picLinks = initialCards.map(function (item) {
  return item.link;
});

console.log(picNames);

// const venuesContainer = document.querySelector(".venues");

// const venueContainer = document.createElement("div");
// venueContainer.setAttribute("class","venue");
// const delButton = document.createElement("div");
// delButton.setAttribute("class", "venue__del-button");
// const venuePic = document.createElement("img");
// venuePic.setAttribute("class", "venue__picture");
// venuePic.setAttribute("alt", picNames[0]);
// venuePic.setAttribute("src", picLinks[0]);
// const venueInfo = document.createElement("div");
// venueInfo.setAttribute("class", "venue__info");
// const venueName = document.createElement("div");
// venueName.setAttribute("class","venue__info-name");
// venueName.textContent = picNames[0];
// const likeButton = document.createElement("div");
// likeButton.setAttribute("class", "venue__info-likebutton");

// venuesContainer.append(venueContainer);
// venueContainer.append(delButton,venuePic, venueInfo);
// venueInfo.append(venueName, likeButton);

const venueTemplate = document.querySelector(".venues__template").content;
const venuesContainer = document.querySelector(".venues");
const venueContainer = venueTemplate.querySelector(".venue").cloneNode(true);

venueContainer.querySelector(".venue__info-name").textContent = picNames[0];
const venuePic = venueContainer.querySelectorAll(".venue__picture");
// venueContainer.querySelector(".venue__picture").src = picLinks[0];

venuesContainer.append(venueContainer, venueContainer.cloneNode(true));

const allVenues = document.querySelectorAll(".venue");

const allVenuesArray = Array.from(allVenues);

const venueNames = allVenuesArray.map(function (item, index) {
  return item;
});

console.log(venueNames);

const editButton = document.querySelector(".author__editbutton");

function showEditInfo() {
  const formWindow = document.querySelector(".edit-info_opened");
  formWindow.setAttribute("style", "display: flex");
}

editButton.addEventListener("click", showEditInfo);

const closeButton = document.querySelector(
  ".edit-info__container-closebuttton"
);

function closeEditForm() {
  const formWindow = document.querySelector(".edit-info_opened");
  formWindow.setAttribute("style", "display: none");
}

closeButton.addEventListener("click", closeEditForm);

const formElement = document.querySelector(".edit-info__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".edit-info__container-name");
  const jobInput = document.querySelector(".edit-info__container-job");

  const newName = nameInput.value;
  const newJob = jobInput.value;

  const currentName = document.querySelector(".author__info-name");
  const currentJob = document.querySelector(".author__info-job");

  currentName.textContent = newName;
  currentJob.textContent = newJob;
}

formElement.addEventListener("submit", handleProfileFormSubmit);
formElement.addEventListener("submit", closeEditForm);

const addImageButton = document.querySelector(".author__add-button");

const addImageButton2 = document.querySelector(
  ".author__add-button_resolution_1180"
);

function addNewImgForm() {
  const formWindow = document.querySelector(".new-image_opened");
  formWindow.setAttribute("style", "display: flex");
}
addImageButton.addEventListener("click", addNewImgForm);
addImageButton2.addEventListener("click", addNewImgForm);

const closeButton2 = document.querySelector(
  ".new-image__container-closebuttton"
);

function closeNewImgForm() {
  const formWindow = document.querySelector(".new-image_opened");
  formWindow.setAttribute("style", "display: none");
}

function clearFields() {
  const newImgForm = document.querySelector(".new-image__container");
  newImgForm.reset();
}

closeButton2.addEventListener("click", closeNewImgForm);

const ImgSaveButton = document.querySelector(".new-image__container-button");
