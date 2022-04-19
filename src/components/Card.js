import trashSrc from "../images/Trash.svg";

class Card {
  constructor(data, cardSelector, { handlePreviewPopup, handleDeleteCard }) {
    this._title = data.name;
    this._link = data.link;
    this._handlePreviewPopup = handlePreviewPopup;
    this._handleDeleteCard = handleDeleteCard;
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
    const cardLikeButton = this._element.querySelector(".card__like-button");
    cardLikeButton.classList.toggle("card__like-button_active");
  };
  // trash can icon for deleting the card, removing it from the list
  _handleDeleteButton() {
    this._handleDeleteCard();
  }
  //__________________________________________________________________________
  //
  _setEventListeners() {
    //like button
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    // DELETE FORM BUTTON
    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => this._handleDeleteButton());
    //preview button
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPopup());
  }
  //__________________________________________________________________________
  //
  // deleteCardPopupButton.addEventListener("click", () => {
  //   deleteForm.open()
  // })
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
    this._element.querySelector(".card__trash").src = trashSrc;

    //--returns the withdrawl-- (sends the card with filled in details)
    return this._element;
  }
}
//____________________________________________________________________________\
//
export default Card;
//-------------------------//
