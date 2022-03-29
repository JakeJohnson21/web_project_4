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
  placeConfig,
  placeList,
  cardSelector,
  editModalBox,
  addModalBox,
  editModalWindow,
  addModalWindow,
  previewImageModalWindow,
  nameInput,
  titleInput,
  photoInput,
  photoTitleInput,
  personName,
  personTitle,
  editModalCloseButton,
  addModalCloseButton,
  previewImageCloseButton,
  editProfilePopupButton,
  addPlacePopupButton,
} from "../utils/constants.js";

//__________________________________________________________________________
//
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();
//__________________________________________________________________________

/////////  RENDER CARD  ////////////////////
function renderCard({ name, link }, container) {
  const card = new Card({ name, link }, cardSelector);
  container.prepend(card.generateCard());
}
//---------------------------------------------------------------------------//
//       D               CARD TEMPLATE DECLARATION                           //
//___________________________________________________________________________//
const user = new UserInfo({
  userName: ".profile__title-name",
  userTitle: ".profile__text-job",
});
// an instruction for processing a Card instance here
const createNewCard = (item) => {
  const card = new Card(item, cardSelector);
  return card.generateCard();
};
// AN INSTANCE OF THE POPUP WITH IMAGE CLASS
const preImage = new PopupWithImage({
  popupSelector: ".js-preview-modal",
});
//////////////////////////////////////////////////////////////////////////////////
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => cardsList.addItem(createNewCard(item)),
  },
  ".cards"
);
//////////////////////////////////////////////////////////////////////////////////
const editForm = new PopupWithForm({
  popupSelector: ".js-edit-modal",
  handleFormSubmit: (userObject) => {
    user.setUserInfo(userObject);
  },
});
//////////////////////////////////////////////////////////////////////////////////
const addForm = new PopupWithForm({
  popupSelector: ".js-add-modal",
  handleFormSubmit: (card) => {
    cardsList.addItem(card);
  },
});
//////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Edit profile handler
function handleProfileFormSubmit() {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;

  closePopup(editModalWindow);
}
//_____________________________________________________
// Edit place handler
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  // sets the input values to the card.
  const name = photoTitleInput.value;
  const link = photoInput.value;

  closePopup(addModalWindow);
  // renderCard({ name, link }, placeList);
}
//////////////////////////////////////////////////////////////////////////////////

cardsList.renderItems();
editForm.setEventListeners();
addForm.setEventListeners();
//////////////////////////////////////////////////////////////////////////////////

//                                EVENT LISTENERS                            //
//___________________________________________________________________________//

editProfilePopupButton.addEventListener("click", () => {
  const currentUserInfo = user.getUserInfo();
  nameInput.value = currentUserInfo.userName;
  titleInput.value = currentUserInfo.userTitle;
  editForm.open();

  openPopup(editModalWindow);
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
previewImageCloseButton.addEventListener("click", () =>
  closePopup(previewImageModalWindow)
);
//________________________________________________________________________________
editModalBox.addEventListener("submit", handleProfileFormSubmit);
addModalBox.addEventListener("submit", handleFormPlaceSubmit);
