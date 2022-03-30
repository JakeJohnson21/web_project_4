//-----------------------//
import { openPopup } from "../utils/utils.js";
//-----------------------//
//_____________________________________________________________________________
//
const previewImageElement = document.querySelector(".modal__container_preview");
const previewImageModalWindow = document.querySelector(".js-preview-modal");
const imageElement = previewImageElement.querySelector(".modal__preview-image");
const previewCaption = previewImageElement.querySelector(
  ".modal__preview-text"
);

//-----------------------------------------------------------------------------
//       CARD CLASS
//_____________________________________________________________________________
//
class Card {
  constructor(data, cardSelector, { handlePreviewPopup }) {
    this._title = data.name;
    this._link = data.link;
    this._handlePreviewPopup = handlePreviewPopup;
    this._cardSelector = cardSelector;
  }
  //GRABS THE HTML TEMPLATE ELEMENT
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);
  }
  //__________________________________________________________________________
  //
  // heart shaped like button, toggles filled in or outlined.. on / off
  _handleLikeButton = () => {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  };
  // trash can icon for deleting the card, removing it from the list
  _handleDeleteButton() {
    this._element.remove();
  }
  //__________________________________________________________________________
  //
  _setEventListeners() {
    //like button
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());
    //delete button
    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => this._handleDeleteButton());
    // //preview button
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPopup());
  }
  //__________________________________________________________________________
  //
  // the full size of the image from the card. shows caption.
  // _handlePreviewPopup() {
  //   imageElement.src = this._link;
  //   previewCaption.textContent = this._title;
  //   imageElement.alt = this._title;

  //   openPopup(previewImageModalWindow);
  // }
  //__________________________________________________________________________
  generateCard() {
    //grabs the current card itself.
    this._element = this._getTemplate();
    //grabs current cards event listeners
    this._setEventListeners();
    // grabs the current cards image / title
    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = this._title;
    this._element.querySelector(".card__place").textContent = this._title;
    //--returns the withdrawl-- (sends the card with filled in details)
    return this._element;
  }
}
//____________________________________________________________________________\
//
export default Card;
//-------------------------//
