//---------------------------------------------------------------------------//
//          IMPORTS                                                          //
//___________________________________________________________________________//
//
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
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

//---------------------------------------------------------------------------//
//       D           CARD CONTAINER (GALLERY)                                //
//___________________________________________________________________________//
//
const cardData = {
  name: ".card__place",
  link: ".card__image",
};
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
//GENERAL MODAL WINDOW
const modal = document.querySelector(".modal");
//MODAL WINDOW
const editModalWindow = document.querySelector(".js-edit-modal");
const addModalWindow = document.querySelector(".js-add-modal");
const previewImageModalWindow = document.querySelector(".js-preview-modal");
//
//MODAL BOX
const editModalBox = editModalWindow.querySelector(".modal__box");
const addModalBox = addModalWindow.querySelector(".modal__box");

//
//PREVIEW
const previewImageElement = document.querySelector(".js-preview-modal");

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
//MODAL CONTAINER
const modalContainer = document.querySelector(".modal__container");
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
//PLACE TITLE

//
//PLACE PHOTO
const cardImage = document.querySelector(".card__image");

const previewCaption = document.querySelector(".modal__preview-text");
//
//---------------------------------------------------------------------------//
//      D                     BUTTON DECLARATIONS                            //
//___________________________________________________________________________//
//
//MODAL SUBMIT BUTTONS
const editProfileButton = document.querySelector(".modal__save");
const addPlaceButton = document.querySelector(".modal__create");
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
//////////////////////////////////////////////

function renderCard(data, container) {
  const card = new Card(data, cardSelector);
  container.prepend(card.generateCard());
}
//////////////////////////////////////////////
//---------------------------------------------------------------------------//
//                            OPEN / CLOSE POPUP                             //
//___________________________________________________________________________//
const handleEscapeButton = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".modal__is-opened"));
  }
};
const handleClickOnOverlay = (evt) => {
  if (!evt.target.closest(".modal__container")) {
    closePopup(evt.currentTarget);
  }
};

function openPopup(modal) {
  modal.addEventListener("click", handleClickOnOverlay);
  document.addEventListener("keydown", handleEscapeButton);
  modal.classList.add("modal__is-opened");
}

function closePopup(modal) {
  modal.removeEventListener("click", handleClickOnOverlay);
  document.removeEventListener("keydown", handleEscapeButton);
  modal.classList.remove("modal__is-opened");
}

//---------------------------------------------------------------------------//
//                                SUBMIT HANDLER                             //
//___________________________________________________________________________//
//
//
///Edit profile handler
function handleFormSubmit(evt) {
  evt.preventDefault();
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;

  closePopup(editModalWindow);
}
//
/// Edit place handler
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: ".card__place",
    link: ".card__image",
  };
  // const card = generateCard({ name, link });
  closePopup(addModalWindow);
  renderCard(cardData, placeList);
}
//

//
//initial cards
initialCards.forEach(function (data) {
  renderCard(data, placeList);
});
//
//

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
addPlacePopupButton.addEventListener("click", () => {
  const button = addModalWindow.querySelector(".modal__button");
  button.disabled = true;
  button.classList.add("modal__button_disabled");
  openPopup(addModalWindow);
});
editModalCloseButton.addEventListener("click", () =>
  closePopup(editModalWindow)
);
addModalCloseButton.addEventListener("click", () => closePopup(addModalWindow));
previewImageCloseButton.addEventListener("click", () =>
  closePopup(previewImageModalWindow)
);

editModalBox.addEventListener("submit", handleFormSubmit);
addModalBox.addEventListener("submit", handleFormPlaceSubmit);
//
//
//

const settings = {
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
};

////////// ADD TO CARD.JS --+

//////////////////////////////////////////
//////////////////////////////////////////
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();

//help with finishing up the renderCard function where "data" is not defined.
// how to split up the content in the seperate JS files
