export default class Popup {
  constructor({ popupSelector }) {
    this.popupSelector = document.querySelector(popupSelector);
  }
  open() {
    this.popupSelector.classList.add("modal__is-opened");
    document.addEventListener("keyup", this._handleEscapeClose);
    this.popupSelector.addEventListener("mousedown", (evt) => {
      this._handleClickOnOverlay(evt);
    });
  }
  close() {
    this.popupSelector.classList.remove("modal__is-opened");
    document.removeEventListener("keyup", this._handleEscapeClose);
    this.popupSelector.removeEventListener("mousedown", (evt) => {
      this._handleClickOnOverlay(evt);
    });
  }
  _handleClickOnOverlay(evt) {
    if (!evt.target.closest(".modal__container")) {
      this.close(evt.currentTarget);
    }
  }
  _handleEscapeClose = (evt) => {
    evt.preventDefault();
    if (evt.key === "Escape") {
      this.close();
    }
  };
}
