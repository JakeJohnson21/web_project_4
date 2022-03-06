///////////////
const previewImageElement = document.querySelector(".modal__container_preview");
const imageElement = previewImageElement.querySelector(".modal__preview-image");
const previewCaption = previewImageElement.querySelector(
  ".modal__preview-text"
);
const ESC_KEYCODE = 27;

const closeModalWindow = () => {
  //questioning whether I am selecting
  //the correct element. -> (previewImageElement)
  previewImageElement.classList.remove(".modal__is-opened");
  document.removeEventListener("keyup", handleEscapeButton);
  handleEscapeKeyUp();
};

const handleEscapeKeyUp = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closeModalPopup);
};

const isEscEvent = (evt, action) => {
  const activePopup = document.querySelector(".modal__is-opened");
  if (evt.which === ESC_KEYCODE) {
    action(activePopup);
  }
};
///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
//       CARD CLASS                                                          //
//___________________________________________________________________________//
//
class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._link = data.link;
    this._trashEl = data.trashEl;
    //   isLiked;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);
  }
  ///////////////////////////////////////////////////////

  _handleLikeButton() {
    cardLikeButton.classList.toggle("card__like-button_active");
  }
  _handleDeleteButton() {
    this._element.remove();
  }
  ///////////////////////////////////////////////////////
  /////
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
  ///////////////////////////////////////////////////////
  _handlePreviewPopup() {
    previewImageElement.src = data.link;
    previewCaption.textContent = data.title;
    imageElement.alt = data.title;

    openPopup(previewImageModalWindow);
  }
  ///////////////////////////////////////////////////////
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._title;
    // don't forget the "alt" attribute of the image
    this._element.querySelector(".card__text").textContent = this._title;
    return this._element;
  }
}

export default Card;
