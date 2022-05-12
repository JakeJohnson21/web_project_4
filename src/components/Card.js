import trashSrc from "../images/Trash.svg";

class Card {
  constructor(
    data,
    cardSelector,
    { likes, handlePreviewPopup, handleDeleteCard, userID }
  ) {
    this._likes = likes;
    this._cardId = data._id;
    this._title = data.name;
    this._link = data.link;
    this._handlePreviewPopup = handlePreviewPopup;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
    this._ownerId = data.owner._id;
    this._userId = userID;
    this._likesArray = data.likes;
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
    if (this._likesArray.includes(this._userId)) {
      return true;
    } else {
      return false;
    }
  }

  _renderLikes() {
    // THIS IS WHERE THE ON LOAD STUFF GOES
    // CURRENT LIKE COUNT ON LOAD
    // USER LIKES ARE ACTIVE
    const cardLikeButton = this._element.querySelector(".card__like-button");

    this._element.querySelector(".card__like-text").textContent =
      this._likesArray.length;
    if (this._isLiked()) {
      cardLikeButton.classList.add("card__like-button_active");
    } else {
      cardLikeButton.classList.remove("card__like-button_active");
    }
  }

  // heart shaped like button, toggles filled in or outlined.. on / off
  _handleLikeButton = () => {
    const cardLikeButton = this._element.querySelector(".card__like-button");
    cardLikeButton.classList.toggle("card__like-button_active");
  };
  // trash can icon for deleting the card, removing it from the list
  _handleDeleteButton() {
    this._handleDeleteCard(this._element);
  }

  //___________________________________________-________________________________________
  _setEventListeners() {
    //like button
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeButton());

    // DELETE FORM BUTTON
    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => this._handleDeleteButton(this._element));
    //preview button
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPopup());
  }
  //_____________________________________________________________________________________
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
    this._handleTrashVisibility();
    this._element.querySelector(".card__trash").src = trashSrc;
    this._renderLikes();
    //--returns the withdrawl-- (sends the card with filled in details)
    return this._element;
  }
}
//____________________________________________________________________________\
//
export default Card;
//-------------------------//
