import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ name, link }, previewText, previewImage) {
    const imageElement = this.popupSelector.querySelector(previewImage);
    this.popupSelector.querySelector(previewText).textContent = name;
    imageElement.src = link;
    imageElement.alt = name;

    super.open();
  }
}
