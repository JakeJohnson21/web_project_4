import Popup from "./Popup.js";

export default class PopupWithImages extends Popup {
  open() {
    this.popupSelector.querySelector(".modal__preview-image").src = this._link;
    this.popupSelector.querySelector(".modal__preview-text").textContent =
      this._title;
    this.popupSelector.querySelector(".modal__preview-image").alt = this._title;
    super.open();
  }
}
