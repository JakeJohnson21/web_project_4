import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
import aroundSrc from "../images/around.svg";
import imageSrc from "../images/image.jpg";

import {
  initialCards,
  settings,
  profileConfig,
  photoConfig,
  modalWindowConfig,
  closeButtonConfig,
  popupButtonConfig,
  formConfig,
  cardSelector,
} from "../utils/constants.js";

//--------------------------------------------------------------------------
const imageImg = document.getElementById("imageImg");
const aroundSvg = document.getElementById("aroundSvg");

imageImg.src = imageSrc;
aroundSvg.src = aroundSrc;

const editModalWindow = document.querySelector(modalWindowConfig.edit);
const addModalWindow = document.querySelector(modalWindowConfig.add);
const previewImageModalWindow = document.querySelector(
  modalWindowConfig.preview
);
const picModalWindow = document.querySelector(modalWindowConfig.pic);
const addModalBox = addModalWindow.querySelector(formConfig.box);
const editModalBox = editModalWindow.querySelector(formConfig.box);

const editModalCloseButton = editModalWindow.querySelector(
  closeButtonConfig.close
);
const addModalCloseButton = addModalWindow.querySelector(
  closeButtonConfig.close
);
const picModalCloseButton = picModalWindow.querySelector(
  closeButtonConfig.close
);
const previewImageCloseButton = previewImageModalWindow.querySelector(
  closeButtonConfig.close
);
const editProfilePopupButton = document.querySelector(popupButtonConfig.edit);
const addPlacePopupButton = document.querySelector(popupButtonConfig.add);
const editPicPopupButton = document.querySelector(popupButtonConfig.pic);

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
      preImage.open(item, photoConfig.title, photoConfig.link);
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
// const picForm = new PopupWithForm({
//   popupSelector: ".js-pic-modal",
//   handleFormSubmit: (pic) => {},
// });

cardsList.renderItems();
editForm.setEventListeners();
addForm.setEventListeners();
picForm.setEventListeners();
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

editPicPopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  picForm.open();
});
//________________________________________________________________________________
addPlacePopupButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addForm.open();
});
//________________________________________________________________________________
editModalCloseButton.addEventListener("click", () => editForm.close());
//________________________________________________________________________________
addModalCloseButton.addEventListener("click", () => addForm.close());
previewImageCloseButton.addEventListener("click", () => preImage.close());
//________________________________________________________________________________
picModalCloseButton.addEventListener("click", () => picForm.close());
