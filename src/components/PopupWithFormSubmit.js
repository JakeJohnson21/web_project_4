import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor({ popupSelector, buttonText, loadingButtonText }) {
    super({ popupSelector });
    this._submitButton = this.popupElement.querySelector(".modal__button");
    this._buttonText = buttonText;
    this._loadingButtonText = loadingButtonText;
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }

  setEventListeners() {
    this.popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
