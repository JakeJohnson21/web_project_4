import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupForm = this.popupElement.querySelector(".modal__box");
  }
}
