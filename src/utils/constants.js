// CARD TEMPLATE SELECTOR
export const cardSelector = "#card-template";
// INITIAL CARDS IMPORT
import milwaukeeSrc from "../images/milwaukee.jpg";
import chicagoSrc from "../images/chicago.jpg";
import waikikiSrc from "../images/waikiki.jpg";
import sydneySrc from "../images/sydney.jpg";
import londonSrc from "../images/london.jpg";
import dubaiSrc from "../images/dubai.jpg";
// INITIAL CARDS OBJECT
export const initialCards = [
  {
    name: "Milwaukee, Wisconsin",
    link: milwaukeeSrc,
  },
  {
    name: "Chicago, Illinois",
    link: chicagoSrc,
  },
  {
    name: "Waikiki Beach O'ahu",
    link: waikikiSrc,
  },
  {
    name: "Sydney Harbour, Australia",
    link: sydneySrc,
  },
  {
    name: "London, England",
    link: londonSrc,
  },
  {
    name: "Dubai",
    link: dubaiSrc,
  },
];
// SETTINGS
export const settings = {
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
};

// PROFILE CONFIG OBJECT-
export const profileConfig = {
  nameInput: ".modal__input_profile_name",
  titleInput: ".modal__input_profile_title",
};
// PLACE CONFIG OBJECT-
export const placeConfig = {
  photoTitleInput: ".modal__input_image_title",
  photoInput: ".modal__input_image_link",
};
// PHOTO CONFIG OBJECT-
export const photoConfig = {
  title: ".modal__preview-text",
  link: ".modal__preview-image",
};

// MODAL WINDOW CONFIG OBJECT
export const modalWindowConfig = {
  edit: ".js-edit-modal",
  add: ".js-add-modal",
  preview: ".js-preview-modal",
};
// FORM CONFIG OBJECT
export const formConfig = {
  box: ".modal__box",
};

export const closeButtonConfig = {
  close: ".modal__close-button",
};
//
export const popupButtonConfig = {
  edit: ".profile__edit-button",
  add: ".profile__add",
};
