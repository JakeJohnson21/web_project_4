import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    this.popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }
}
