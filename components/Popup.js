export default class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
  }
  open() {
    this.popupSelector.addEventListener("click", handleClickOnOverlay);
    document.addEventListener("keydown", handleEscapeButton);
    this.popupSelector.classList.add("modal__is-opened");
  }
  close() {
    this.popupSelector.removeEventListener("click", handleClickOnOverlay);
    document.removeEventListener("keydown", handleEscapeButton);
    this.popupSelector.classList.remove("modal__is-opened");
  }
  _handleEscClose() {}
  setEventListeners() {}
}
