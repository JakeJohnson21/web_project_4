//---------------------------------------------------------------------------//
//          IMPORTS                                                          //
//___________________________________________________________________________//
//
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popop from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import { openPopup, closePopup } from "../scripts/utils.js";
import { cardSelector, placeList } from "../components/constants.js";
d;
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
//
const settings = {
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input_error",
};

//__________________________________________________________________________
//
const addFormValidator = new FormValidator(addModalBox, settings);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(editModalBox, settings);
editFormValidator.enableValidation();
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
