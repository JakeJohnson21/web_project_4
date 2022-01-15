/////////////////
//  Declarations --------
/////////////////

const initialCards = [
  {
    name: "Milwaukee, Wisconsin",
    link: "images/milwaukee.jpg",
  },
  {
    name: "Chicago, Illinois",
    link: "images/chicago.jpg",
  },
  {
    name: "Waikiki Beach O'ahu",
    link: "images/waikiki.jpg",
  },
  {
    name: "Sydney Harbour, Australia",
    link: "images/sydney.jpg",
  },
  {
    name: "London, England",
    link: "images/london.jpg",
  },
  {
    name: "Dubai",
    link: "images/dubai.jpg",
  },
];

// Modal-----------

//popup box
let edit = document.querySelector(".modal");
//the name input field
let nameInput = document.querySelector(".modal__input_profile_name");
//the title (explorer) input field
let titleInput = document.querySelector(".modal__input_profile_title");
// the SAVE button
let save = document.querySelector(".modal__save");
//form edit box
let editBox = document.querySelector(".modal__box");
//new place main modal
let modalPlace = edit.querySelector(".modal__place");
//the photo title input field
let photoTitleInput = document.querySelector(".modal__input_image_title");
//the photo source input field
let photoInput = document.querySelector(".modal__input_image_link");

// Buttons and other DOM elements ----------

//the X to close out the popup
let editCloseIcon = document.querySelector(".modal__close-button");
//the button on the main page to open the edit popup dialogue box
let editOpenPopup = document.querySelector(".profile__edit-button");
//add button
let addOpenPopup = document.querySelector(".profile__add");
// The end point for the persons name
let personName = document.querySelector(".profile__title-name");
// The end point for explorer
let personTitle = document.querySelector(".profile__text-job");
//The gallery image place for input
let galleryImage = document.querySelector(".card__image");

const placeList = document.querySelector(".card");

////////
// TEMPLATES------
////////////////

let cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__item");

//////////////
//  Functions--------
//////////////

function openPopup() {
  edit.classList.toggle("modal_none");
  titleInput.value = personTitle.textContent;
  nameInput.value = personName.textContent;
}
function closePopup() {
  edit.classList.toggle("modal_none");
}

document.querySelectorAll(".gallery__like-button").forEach((element) =>
  element.addEventListener("click", function (evt) {
    evt.target.classList.toggle("gallery__like-button_active");
  })
);

function formSubmitHandler(evt) {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;
  evt.preventDefault();
  closePopup();
}

//////////////////
// Event Handlers --------
//////////////////

addOpenPopup.addEventListener("click", function () {
  modalPlace.classList.toggle("modal_none");
});
editOpenPopup.addEventListener("click", openPopup);
editCloseIcon.addEventListener("click", closePopup);
editBox.addEventListener("submit", formSubmitHandler);

///// Actions ------

initialCards.forEach(function (card) {
  //clone the template
  // query name element
  //query image element
  // add event listener
});
// function toggleFormVisibility() {
//   if (edit.style.display === "none") {
//     edit.style.display = "block";
//     edit;
//   } else {
//     edit.style.display = "none";
//   }
// }
// editOpenPopup.addEventListener("click", toggleFormVisibility);
// editCloseIcon.addEventListener("click", toggleFormVisibility);

// function formSubmitHandler(evt) {
//   personTitle.textContent = titleInput.value;
//   personName.textContent = nameInput.value;
//   ifFormIsEmpty();
//   evt.preventDefault();
// }
// editBox.addEventListener("submit", formSubmitHandler);
// save.addEventListener("click", toggleFormVisibility);

// function addCard(cardTitle, cardSource) {
//   //get the card "template"
//   const cardTemplate = document.querySelector("#card-template").content;
//   //get the elements of card "template"
//   const cardElement = cardTemplate.querySelector("card").cloneNode(true);
//   //get the title element
//   cardElement.querySelector(".card__title").textContent = cardTitle;
//   //get the image src element
//   cardElement.querySelector(".card__image").src = cardSource;
//   // append card item to the gallery
//   cardContainer.append(cardContainer);
//   cardElement
//     .querySelector(".gallery__like-button")
//     .addEventListener("click", function (evt) {
//       console.log(evt);
//     });
// }

// function ifFormIsEmpty() {
//   if (nameInput.value.length === 0) {
//     personName.textContent = "Jacques Cousteau";
//   }
//   if (titleInput.value.length === 0) {
//     personTitle.textContent = "Explorer";
//   }
// }
