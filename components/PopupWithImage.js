import Popup from "./Popup";

export default class PopupWithImages extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._title = data.name;
    this._link = data.link;
  }

  open() {
    imageElement.src = this._link;
    previewCaption.textContent = this._title;
    imageElement.alt = this._title;
    super.open(previewImageModalWindow);
  }

  // setEventListeners() {
  //   this._.querySelector(".card__image").addEventListener("click", () =>
  //     this._handlePreviewPopup()
  //   );
  // }
}
