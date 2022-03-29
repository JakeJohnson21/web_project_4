export const initialCards = [
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
//-------------------------------------------------------
//
export const settings = {
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
};
//-------------------------------------------------------
//
// PROFILE CONFIG OBJECT-
export const profileConfig = {
  nameInput: ".modal__input_profile_name",
  titleInput: ".modal__input_profile_title",
};
//-------------------------------------------------------
//
// PLACE CONFIG OBJECT-
export const placeConfig = {
  photoTitleInput: ".modal__input_image_title",
  photoInput: ".modal__input_image_link",
};
//-------------------------------------------------------
//
// PHOTO CONFIG OBJECT-
export const photoConfig = {};
//
//-------------------------------------------------------

export const placeList = document.querySelector(".cards");
export const cardSelector = "#card-template";

export const editModalWindow = document.querySelector(".js-edit-modal");
export const addModalWindow = document.querySelector(".js-add-modal");
export const previewImageModalWindow =
  document.querySelector(".js-preview-modal");
//
//MODAL BOX
export const editModalBox = editModalWindow.querySelector(".modal__box");
export const addModalBox = addModalWindow.querySelector(".modal__box");
//
//---------------------------------------------------------------------------//
//      D                     INPUT DECLARATIONS                             //
//___________________________________________________________________________//
//

//
//PROFILE NAME
export const nameInput = document.querySelector(".modal__input_profile_name");
//
//PROFILE TITLE
export const titleInput = document.querySelector(".modal__input_profile_title");
//

//PLACE TITLE
export const photoTitleInput = document.querySelector(
  ".modal__input_image_title"
);
//PLACE PHOTO
export const photoInput = document.querySelector(".modal__input_image_link");
//

//---------------------------------------------------------------------------//
//      D                INPUT END POINTS (DESTINATION)                      //
//___________________________________________________________________________//
//
//PROFILE NAME
export const personName = document.querySelector(".profile__title-name");
//
//PROFILE TITLE
export const personTitle = document.querySelector(".profile__text-job");
//
//ClOSE MODAL BUTTONS
export const editModalCloseButton = editModalWindow.querySelector(
  ".modal__close-button"
);
export const addModalCloseButton = addModalWindow.querySelector(
  ".modal__close-button"
);
export const previewImageCloseButton = previewImageModalWindow.querySelector(
  ".modal__close-button"
);
//
//OPEN MODAL BUTTONS
export const editProfilePopupButton = document.querySelector(
  ".profile__edit-button"
);
export const addPlacePopupButton = document.querySelector(".profile__add");
