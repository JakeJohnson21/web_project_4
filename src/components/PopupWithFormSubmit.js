import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor(cardSelector, { popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._cardSelector = cardSelector;
    this._popupForm = this.popupElement;
    this._handleFormSubmit = handleFormSubmit;
  }

  setEventListeners(i) {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(i);
      super.close();
    });
  }
}
