//---------------------------------------------------------------------------//
//          IMPORTS                                                          //
//___________________________________________________________________________//
//
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
// import PopupWithImage from "../components/PopupWithImage.js";
import { openPopup, closePopup } from "../utils/utils.js";
import {
  cardSelector,
  editModalWindow,
  placeList,
  initialCards,
  settings,
  addModalWindow,
  addModalBox,
  editModalBox,
  editProfilePopupButton,
  addPlacePopupButton,
  editModalCloseButton,
  addModalCloseButton,
  previewImageCloseButton,
} from "../utils/constants.js";
//
//---------------------------------------------------------------------------//
//          INITIAL CARDS ARRAY                                              //
//___________________________________________________________________________//

//__________________________________________________________________________
//
const editForm = new PopupWithForm({
  popupSelector: editModalWindow,
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const user = new UserInfo({ userName, userinfo }, editModalWindow);
    this.getUserInfo();
    this.setUserInfo();
    editForm.close();
  },
});

const addForm = new PopupWithForm({
  popupSelector: addModalWindow,
  handleFormSubmit: (evt) => {},
});
//__________________________________________________________________________
//
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();
//
//__________________________________________________________________________

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      // an instruction for processing a Card instance here
      const card = new Card(item, cardSelector);
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  placeList
);
//__________________________________________________________________________//
//__________________________________________________________________________//
//__________________________________________________________________________//
//
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
