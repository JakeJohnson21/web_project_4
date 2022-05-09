import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import ProfileImage from "../components/ProfileImage.js";
import "./index.css";
import aroundSrc from "../images/around.svg";
import imageSrc from "../images/image.jpg";
import { Api } from "../components/Api.js";

let userID;
let cardsList;
let theLikes;
import {
  settings,
  profileConfig,
  photoConfig,
  modalWindowConfig,
  closeButtonConfig,
  popupButtonConfig,
  formConfig,
  cardSelector,
  likes,
  modalButtonConfig,
} from "../utils/constants.js";

import PopupWithFormSubmit from "../components/PopupWithFormSubmit.js";
//////////////////////////////////////////
fetch("https://around.nomoreparties.co/v1/group-12/cards", {
  headers: {
    authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((res) => console.log(res));

//--------------------------------------------------------------------------
const imageImg = document.getElementById("imageImg");
const aroundSvg = document.getElementById("aroundSvg");

imageImg.src = imageSrc;
aroundSvg.src = aroundSrc;
const cardLikes = document.querySelector(likes.cardLikes);
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

const loadingCreate = document.querySelector(modalButtonConfig.createButton);
const loadingSave = document.querySelector(modalButtonConfig.saveButton);
const modalButton = document.querySelector(modalButtonConfig.modalButton);

function renderLoading(isLoading) {
  if (isLoading) {
    modalButton.textContent = "Saving...";
  } else {
    modalButton.textContent = "Save";
  }
}
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
    "Content-Type": "application/json",
  },
});

//__________________________________________________________________________
//

//__________________________________________________________________________
//
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();
//__________________________________________________________________________
//
const userInfo = new UserInfo({
  userName: ".profile__title-name",
  userTitle: ".profile__text-job",
});

const pic = new ProfileImage({
  image: ".profile__pic",
});
//__________________________________________________________________________
// AN INSTANCE OF THE POPUP WITH IMAGE CLASS
const preImage = new PopupWithImage({
  popupSelector: ".js-preview-modal",
});
///
// an instruction for processing a Card instance here
////////////////////////////////////////////////////
// api.getLikes().then((data) =>
//   data.forEach((like) => {
//     like.likes.length = cardLikes.textContent;
//   })
// );
////////////////////////////////////////////////////
const createNewCard = (item) => {
  const card = new Card(item, cardSelector, {
    handlePreviewPopup: () => {
      preImage.open(item, photoConfig.title, photoConfig.link);
    },
    handleDeleteCard: (card) => {
      deleteForm.open();
      deleteForm.setSubmitAction(() => {
        api.deleteCard(item._id).then(() => {
          card.remove();
          deleteForm.close();
        });
      });
    },
    userID,
    addLike: (cardId) => {
      api.addLikes(cardId).then(() => card.incrementLikes());
    },
    removeLike: (cardId) => {
      api.removeLikes(cardId).then(() => card.decrementLikes());
    },
  });

  return card.generateCard();
};

api.getInitialCards().then((cards) => {
  api.getOwnerId().then((userInfo) => {
    theLikes = userInfo.likes;
    userID = userInfo._id;
    cardsList = new Section(
      {
        items: cards,
        renderer: (item) => cardsList.addItem(createNewCard(item)),
      },
      ".cards"
    );
    cardsList.renderItems();
  });
});

const editForm = new PopupWithForm({
  popupSelector: ".js-edit-modal",
  handleFormSubmit: (user) => {
    api.postNewProfile(user).then(() => userInfo.setUserInfo(user));
  },
});
const addForm = new PopupWithForm({
  popupSelector: ".js-add-modal",
  handleFormSubmit: (card) => {
    api.postNewCard(card).then(() => cardsList.addItem(createNewCard(card)));
  },
});
const picForm = new PopupWithForm({
  popupSelector: ".js-pic-modal",
  handleFormSubmit: (newPic) => {
    api.updateProfilePic(newPic).then(() => pic.setProfileImage(newPic));
  },
});
const deleteForm = new PopupWithFormSubmit({
  popupSelector: ".js-delete-modal",
});

editForm.setEventListeners();
addForm.setEventListeners();
picForm.setEventListeners();
deleteForm.setEventListeners();
//                                EVENT LISTENERS                            //
//___________________________________________________________________________//
const nameInput = document.querySelector(profileConfig.nameInput);
const titleInput = document.querySelector(profileConfig.titleInput);

editProfilePopupButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
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
//________________________________________________________________________________
//

//________________________________________________________________________________
//________________________________________________________________________________
editModalCloseButton.addEventListener("click", () => editForm.close());
//________________________________________________________________________________
addModalCloseButton.addEventListener("click", () => addForm.close());
previewImageCloseButton.addEventListener("click", () => preImage.close());
//________________________________________________________________________________
picModalCloseButton.addEventListener("click", () => picForm.close());
