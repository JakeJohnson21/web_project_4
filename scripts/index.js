//---------------------------------------------------------------------------//
//          IMPORTS                                                          //
//___________________________________________________________________________//
//
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openPopup, closePopup } from "./utils.js";
//
//---------------------------------------------------------------------------//
//          INITIAL CARDS ARRAY                                              //
//___________________________________________________________________________//

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
//
//---------------------------------------------------------------------------//
//       D           CARD CONTAINER (GALLERY)                                //
//___________________________________________________________________________//
//
const placeList = document.querySelector(".cards");
//
//---------------------------------------------------------------------------//
//       D           MODAL DECLARATIONS                                      //
//___________________________________________________________________________//
//
//MODAL WINDOW
const editModalWindow = document.querySelector(".js-edit-modal");
const addModalWindow = document.querySelector(".js-add-modal");
const previewImageModalWindow = document.querySelector(".js-preview-modal");
//
//MODAL BOX
const editModalBox = editModalWindow.querySelector(".modal__box");
const addModalBox = addModalWindow.querySelector(".modal__box");
//
//---------------------------------------------------------------------------//
//      D                     INPUT DECLARATIONS                             //
//___________________________________________________________________________//
//
//PROFILE NAME
const nameInput = document.querySelector(".modal__input_profile_name");
//
//PROFILE TITLE
const titleInput = document.querySelector(".modal__input_profile_title");
//
//PLACE TITLE
const photoTitleInput = document.querySelector(".modal__input_image_title");
//
//PLACE PHOTO
const photoInput = document.querySelector(".modal__input_image_link");
//

//---------------------------------------------------------------------------//
//      D                INPUT END POINTS (DESTINATION)                      //
//___________________________________________________________________________//
//
//PROFILE NAME
const personName = document.querySelector(".profile__title-name");
//
//PROFILE TITLE
const personTitle = document.querySelector(".profile__text-job");
//
//ClOSE MODAL BUTTONS
const editModalCloseButton = editModalWindow.querySelector(
  ".modal__close-button"
);
const addModalCloseButton = addModalWindow.querySelector(
  ".modal__close-button"
);
const previewImageCloseButton = previewImageModalWindow.querySelector(
  ".modal__close-button"
);
//
//OPEN MODAL BUTTONS
const editProfilePopupButton = document.querySelector(".profile__edit-button");
const addPlacePopupButton = document.querySelector(".profile__add");
//
const cardSelector = "#card-template";
//
//---------------------------------------------------------------------------//
//       D               CARD TEMPLATE DECLARATION                           //
//___________________________________________________________________________//
//
// SETTINGS OBJECT
const settings = {
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
};

//__________________________________________________________________________
//
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();
//__________________________________________________________________________

/////////////  RENDER CARD  ////////////////////

function renderCard({ name, link }, container) {
  const card = new Card({ name, link }, cardSelector);
  container.prepend(card.generateCard());
}
//_____________________________________________________
//
///Edit profile handler
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;

  closePopup(editModalWindow);
}
//_____________________________________________________
/// Edit place handler
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  // sets the input values to the card.
  const name = photoTitleInput.value;
  const link = photoInput.value;

  closePopup(addModalWindow);
  renderCard({ name, link }, placeList);
  addModalBox.reset();
}
//_____________________________________________________
//     INITIAL CARDS
initialCards.forEach(function (data) {
  renderCard(data, placeList);
});
//
//---------------------------------------------------------------------------//
//                                EVENT LISTENERS                            //
//___________________________________________________________________________//

const modalButton = document.querySelector(".modal__button");

editProfilePopupButton.addEventListener("click", () => {
  titleInput.value = personTitle.textContent;
  nameInput.value = personName.textContent;
  openPopup(editModalWindow);
});
//__________________________________________________________________________
//
addPlacePopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  openPopup(addModalWindow);
});
//__________________________________________________________________________
//
editModalCloseButton.addEventListener("click", () => {
  closePopup(editModalWindow);
});
//________________________________________________________________________________
//
addModalCloseButton.addEventListener("click", () => {
  closePopup(addModalWindow);
});

previewImageCloseButton.addEventListener("click", () =>
  closePopup(previewImageModalWindow)
);
//________________________________________________________________________________
//
editModalBox.addEventListener("submit", handleProfileFormSubmit);
addModalBox.addEventListener("submit", handleFormPlaceSubmit);
//
//__________________________________________________________________________
//
