import trashSrc from "../images/Trash.svg";

class Card {
  constructor(
    data,
    cardSelector,
    { handlePreviewPopup, handleDeleteCard, userID, addLike, removeLike }
  ) {
    this._likes = data.likes;
    this._cardId = data._id;
    this._title = data.name;
    this._link = data.link;
    this._handlePreviewPopup = handlePreviewPopup;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
    this._ownerId = data.owner._id;
    this._userId = userID;

    this._addLike = addLike;
    this._removeLike = removeLike;

    this._cardLikeButton;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card__item")
      .cloneNode(true);
  }

  _handleTrashVisibility() {
    this._element
      .querySelector(".card__trash")
      .classList.add(
        this._userId === this._ownerId
          ? "card__trash_visibile"
          : "card__trash_hidden"
      );
  }

  updateLikes(likes) {
    this._likes = likes;
    this._renderLikes();
  }

  _isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _renderLikes() {
    const cardLikeButton = this._element.querySelector(".card__like-button");

    this._element.querySelector(".card__like-text").textContent =
      this._likes.length;

    if (this._isLiked()) {
      cardLikeButton.classList.add("card__like-button_active");
    } else {
      cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  _handleLikeButton = () => {
    const cardLikeButton = this._element.querySelector(".card__like-button");
    cardLikeButton.classList.toggle("card__like-button_active");

    if (this._isLiked()) {
      this._removeLike(this._cardId);
    } else {
      this._addLike(this._cardId);
    }
  };

  _handleDeleteButton() {
    this._handleDeleteCard(this._element);
  }

  //___________________________________________-________________________________________
  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => this._handleDeleteButton(this._element));

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPopup());
  }
  //_____________________________________________________________________________________
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    cardImage.src = this._link;
    cardImage.alt = this._title;
    this._element.querySelector(".card__place").textContent = this._title;
    this._handleTrashVisibility();
    this._element.querySelector(".card__trash").src = trashSrc;
    this._renderLikes();

    return this._element;
  }
}

export default Card;
