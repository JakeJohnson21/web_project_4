class Card {
  constructor(data, cardSelector) {
    this.name = data.name;
    this.link = data.link;
    this.previewCaption = data._previewCaption;
    /////-------------
    this._cardSelector = cardSelector;
    this._cardItemElement = this._getTemplate.cloneNode(true);
    this._cardLikeButton =
      this._cardItemElement.querySelector(".card__like-button");
  }
  /////////////////
  _handleLikeIcon() {
    this._cardLikeButton.classList.toggle("card__like-button_active");
  }
  /////////////////
  _handleDeleteCard() {}
  /////////////////
  _handlePreviewPicture() {}
  /////////////////
  _getTemplate() {
    return document
      .querySelector("#card-template")
      .textContent.querySelector(".card__item");
  }
  /////////////////
  _setEventListeners() {
    //----------------
    this._cardItemElement.addEventListener("click", _handleLikeIcon);
  }

  //     const handleTrashElement = () => {
  //       cardItemElement.remove();
  //     };
  //     //-------------------------

  //     //handleDeletecCard
  //     const trashEl = cardItemElement.querySelector(".card__trash");
  //     trashEl.addEventListener("click", handleTrashElement);
  //   } //_________________________________
  /////////////////
  getView() {
    this._element = this._getTemplate();

    this._setEventListeners();
  }
}
/////////////////
export default Card;
