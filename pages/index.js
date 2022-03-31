//---------------------------------------------------------------------------//
//          IMPORTS                                                          //
//___________________________________________________________________________//
//
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { openPopup, closePopup } from "../utils/utils.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
//---------------------------------------------------------------------------
//          ----------- CONSTANTS IMPORTS-------------                       |
//---------------------------------------------------------------------------
import {
  initialCards,
  settings,
  profileConfig,
  photoConfig,
  placeConfig,
  modalWindowConfig,
  closeButtonConfig,
  popupButtonConfig,
  formConfig,
  cardSelector,
} from "../utils/constants.js";

const editModalWindow = document.querySelector(modalWindowConfig.edit);
const addModalWindow = document.querySelector(modalWindowConfig.add);
const previewImageModalWindow = document.querySelector(
  modalWindowConfig.preview
);
const addModalBox = addModalWindow.querySelector(formConfig.box);
const editModalBox = editModalWindow.querySelector(formConfig.box);

const editModalCloseButton = editModalWindow.querySelector(
  closeButtonConfig.close
);
const addModalCloseButton = addModalWindow.querySelector(
  closeButtonConfig.close
);
const previewImageCloseButton = previewImageModalWindow.querySelector(
  closeButtonConfig.close
);
const editProfilePopupButton = document.querySelector(popupButtonConfig.edit);
const addPlacePopupButton = document.querySelector(popupButtonConfig.add);

const photoTitleInput = document.querySelector(photoConfig.title);
const photoInput = document.querySelector(photoConfig.link);
//__________________________________________________________________________
//
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();
const user = new UserInfo({
  userName: ".profile__title-name",
  userTitle: ".profile__text-job",
});
// AN INSTANCE OF THE POPUP WITH IMAGE CLASS
const preImage = new PopupWithImage({
  popupSelector: ".js-preview-modal",
});
///
// an instruction for processing a Card instance here
const createNewCard = (item) => {
  const card = new Card(item, cardSelector, {
    handlePreviewPopup: () => {
      preImage.open(photoConfig.title, photoConfig.link);
    },
  });

  return card.generateCard();
};
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => cardsList.addItem(createNewCard(item)),
  },
  ".cards"
);
const editForm = new PopupWithForm({
  popupSelector: ".js-edit-modal",
  handleFormSubmit: (userObject) => {
    user.setUserInfo(userObject);
  },
});
const addForm = new PopupWithForm({
  popupSelector: ".js-add-modal",
  handleFormSubmit: (card) => {
    cardsList.addItem(createNewCard(card));
  },
});

cardsList.renderItems();
editForm.setEventListeners();
addForm.setEventListeners();
//                                EVENT LISTENERS                            //
//___________________________________________________________________________//
const nameInput = document.querySelector(profileConfig.nameInput);
const titleInput = document.querySelector(profileConfig.titleInput);

editProfilePopupButton.addEventListener("click", () => {
  const currentUserInfo = user.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  titleInput.value = currentUserInfo.userTitle;
  editForm.open();
});
//________________________________________________________________________________
addPlacePopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  openPopup(addModalWindow);
});
//________________________________________________________________________________
editModalCloseButton.addEventListener("click", () => {
  closePopup(editModalWindow);
});
//________________________________________________________________________________
addModalCloseButton.addEventListener("click", () => {
  closePopup(addModalWindow);
});
//________________________________________________________________________________
previewImageCloseButton.addEventListener("click", () => preImage.close());
//________________________________________________________________________________
