export default class Popup {
  constructor({ popupSelector }) {
    this.popupSelector = document.querySelector(popupSelector);
  }
  open() {
    this.popupSelector.classList.add("modal__is-opened");
    document.addEventListener("keyup", (evt) => {
      this._handleEscapeClose(evt);
    });
    this.popupSelector.addEventListener("click", (evt) => {
      this._handleClickOnOverlay(evt);
    });
  }
  close() {
    this.popupSelector.classList.remove("modal__is-opened");
    document.removeEventListener("keyup", (evt) => {
      this._handleEscapeClose(evt);
    });
    this.popupSelector.removeEventListener("click", (evt) => {
      this._handleClickOnOverlay(evt);
    });
  }
  _handleClickOnOverlay(evt) {
    if (!evt.target.closest(".modal__container")) {
      this.close(evt.currentTarget);
    }
  }
  _handleEscapeClose(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this.popupSelector.addEventListener("click", (evt) => {
      if (!evt.target.closest(".modal__container")) {
        this.close(evt.currentTarget);
      }
    });
  }
}
