/////
import { Api } from "../utils/Api.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
// import ProfileImage from "../components/ProfileImage.js";
import "./index.css";
import aroundSrc from "../images/around.svg";

let userID;
let cardsList;
import {
  settings,
  profileConfig,
  photoConfig,
  modalWindowConfig,
  closeButtonConfig,
  popupButtonConfig,
  formConfig,
  cardSelector,
  profileElements,
} from "../utils/constants.js";

import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";
//--------------------------------------------------------------------------

const aroundSvg = document.getElementById("aroundSvg");

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

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
    "Content-Type": "application/json",
  },
});
//__________________________________________________________________________
//
const cardFormValidator = new FormValidator(addModalBox, settings);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(editModalBox, settings);
profileFormValidator.enableValidation();
//__________________________________________________________________________
//  LOADS ALL INITIAL INFORMATION CARDS & PROFILE DATA
Promise.all([api.getInitialCards(), api.getProfileInfo()])
  .then(([cards, userData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      title: userData.about,
    });
    userInfo.setProfileImage({
      link: userData.avatar,
      name: userData.name,
    });
    userID = userData._id;
    cardsList = new Section(
      {
        items: cards,
        renderer: (item) => cardsList.addItem(createNewCard(item)),
      },
      ".cards"
    );
    cardsList.renderItems();
  })
  .catch((err) => console.log(`Error: ${err.status}`));

const userInfo = new UserInfo({
  userName: ".profile__title-name",
  userTitle: ".profile__text-job",
  userImage: ".profile__pic",
});

//__________________________________________________________________________
// AN INSTANCE OF THE POPUP WITH IMAGE CLASS
const previewPopup = new PopupWithImage({
  popupSelector: ".js-preview-modal",
});

const createNewCard = (item) => {
  const card = new Card(item, cardSelector, {
    handlePreviewPopup: () => {
      previewPopup.open(item, photoConfig.title, photoConfig.link);
    },
    handleDeleteCard: (card) => {
      deleteForm.open();
      deleteForm.setSubmitAction(() => {
        deleteForm.showLoading();
        api
          .deleteCard(item._id)
          .then(() => {
            card.remove();
            deleteForm.close();
          })
          .catch((err) => console.log(`Error: ${err.status}`))
          .finally(() => deleteForm.hideLoading());
      });
    },
    userID,
    addLike: (cardId) => {
      api
        .addLike(cardId)
        .then(({ likes }) => card.updateLikes(likes))
        .catch((err) => console.log(`Error: ${err.status}`));
    },
    removeLike: (cardId) => {
      api
        .removeLike(cardId)
        .then(({ likes }) => card.updateLikes(likes))
        .catch((err) => console.log(`Error: ${err.status}`));
    },
  });

  return card.generateCard();
};

const profileForm = new PopupWithForm({
  popupSelector: ".js-edit-modal",
  buttonText: "Save",
  loadingButtonText: "Saving...",
  handleFormSubmit: (profile) => {
    profileForm.showLoading();
    api
      .updateProfile(profile)
      .then(() => {
        userInfo.setUserInfo(profile);
        profileForm.close();
      })
      .catch((err) => console.log(`Error: ${err.status}`))
      .finally(() => profileForm.hideLoading());
  },
});
const cardForm = new PopupWithForm({
  popupSelector: ".js-add-modal",
  buttonText: "Create",
  loadingButtonText: "Creating...",
  handleFormSubmit: (card) => {
    cardForm.showLoading();
    api
      .postNewCard(card)
      .then((newCard) => {
        cardsList.addItem(createNewCard(newCard));
        cardForm.close();
      })
      .catch((err) => console.log(`Error: ${err.status}`))
      .finally(() => {
        cardForm.hideLoading();
      });
  },
});
const picForm = new PopupWithForm({
  popupSelector: ".js-pic-modal",
  buttonText: "Save",
  loadingButtonText: "Saving...",
  handleFormSubmit: (profileImage) => {
    picForm.showLoading();
    api
      .updateProfile(profileImage)
      .then(() => {
        userInfo.setProfileImage(profileImage);
        picForm.close();
      })
      .catch((err) => console.log(`Error: ${err.status}`))
      .finally(() => picForm.hideLoading());
  },
});
const deleteForm = new PopupWithFormSubmit({
  popupSelector: ".js-delete-modal",
  buttonText: "Yes",
  loadingButtonText: "Deleting...",
});

profileForm.setEventListeners();
cardForm.setEventListeners();
picForm.setEventListeners();
deleteForm.setEventListeners();
//                                EVENT LISTENERS                            //
//___________________________________________________________________________//
const nameInput = document.querySelector(profileConfig.nameInput);
const titleInput = document.querySelector(profileConfig.titleInput);

const fillProfileForm = () => {
  const currentUserInfo = userInfo.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  titleInput.value = currentUserInfo.userTitle;
};

editProfilePopupButton.addEventListener("click", () => {
  fillProfileForm();
  profileForm.open();
});

editPicPopupButton.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  picForm.open();
});
//________________________________________________________________________________
addPlacePopupButton.addEventListener("click", () => {
  cardFormValidator.resetValidation();
  cardForm.open();
});
//________________________________________________________________________________
//________________________________________________________________________________
//

//________________________________________________________________________________
//________________________________________________________________________________
editModalCloseButton.addEventListener("click", () => profileForm.close());
//________________________________________________________________________________
addModalCloseButton.addEventListener("click", () => cardForm.close());
previewImageCloseButton.addEventListener("click", () => previewPopup.close());
//________________________________________________________________________________
picModalCloseButton.addEventListener("click", () => picForm.close());
