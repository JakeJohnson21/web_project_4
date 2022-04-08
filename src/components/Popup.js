export default class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
  }
  open() {
    this.popupElement.classList.add("modal__is-opened");
    document.addEventListener("keyup", this._handleEscapeClose);
    this.popupElement.addEventListener("mousedown", this._handleClickOnOverlay);
  }
  close() {
    this.popupElement.classList.remove("modal__is-opened");
    document.removeEventListener("keyup", this._handleEscapeClose);
    this.popupElement.removeEventListener(
      "mousedown",
      this._handleClickOnOverlay
    );
  }
  _handleClickOnOverlay = (evt) => {
    if (!evt.target.closest(".modal__container")) {
      this.close(evt.currentTarget);
    }
  };
  _handleEscapeClose = (evt) => {
    evt.preventDefault();
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
