///////////////
const previewImageElement = document.querySelector(".modal__container_preview");
const previewImageModalWindow = document.querySelector(".js-preview-modal");
const imageElement = previewImageElement.querySelector(".modal__preview-image");
const previewCaption = previewImageElement.querySelector(
  ".modal__preview-text"
);

const handleEscapeButton = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".modal__is-opened"));
  }
};
const handleClickOnOverlay = (evt) => {
  if (!evt.target.closest(".modal__container")) {
    closePopup(evt.currentTarget);
  }
};

function openPopup(modal) {
  modal.addEventListener("click", handleClickOnOverlay);
  document.addEventListener("keydown", handleEscapeButton);
  modal.classList.add("modal__is-opened");
}

function closePopup(modal) {
  modal.removeEventListener("click", handleClickOnOverlay);
  document.removeEventListener("keydown", handleEscapeButton);
  modal.classList.remove("modal__is-opened");
}

///////////////////////////////////////////////////////////////////////////////
//---------------------------------------------------------------------------//
//       CARD CLASS                                                          //
//___________________________________________________________________________//
//

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
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
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
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
    imageElement.src = this._link;
    previewCaption.textContent = this._title;
    imageElement.alt = this._title;

    openPopup(previewImageModalWindow);
  }
  ///////////////////////////////////////////////////////
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._title;
    this._element.querySelector(".card__place").textContent = this._title;

    return this._element;
  }
}

export default Card;
