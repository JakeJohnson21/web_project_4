import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open({ name, link }, previewText, previewImage) {
    const imageElement = this.popupElement.querySelector(previewImage);
    this.popupElement.querySelector(previewText).textContent = name;
    imageElement.src = link;
    imageElement.alt = name;

    super.open();
  }
}
