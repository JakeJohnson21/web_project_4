// CARD TEMPLATE SELECTOR
export const cardSelector = "#card-template";
// INITIAL CARDS
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
  name: ".modal__preview-text",
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
