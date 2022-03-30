import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open(previewText, previewImage) {
    this.popupSelector.querySelector(previewText).textContent = this._title;
    this.popupSelector.querySelector(previewText).alt = this._title;
    this.popupSelector.querySelector(previewImage).src = this._link;

    super.open();
  }
}
