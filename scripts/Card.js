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
  isEscEvent(evt, closePopup);
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
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }
  ///////////////////////////////////////////////////////

  _handleLikeButton() {
    const cardLikeButton = this._element.querySelector(".card__like-button");
    cardLikeButton.classList.toggle("card__like-button_active");
  }
  // _handleDeleteButton() {
  //   this._element.remove();
  // }
  ///////////////////////////////////////////////////////
  /////
  _setEventListeners() {
    //like button
    cardLikeButton.addEventListener("click", this._handleLikeButton);
    //delete button
    // trashEl.addEventListener("click", this._handleDeleteButton);
    // //preview button
    imageEl.addEventListener("click", this._handlePreviewPopup);
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
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._title;
    this._setEventListeners();
    console.log("element", this._element);
  }
}

export default Card;
