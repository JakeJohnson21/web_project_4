import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // THIS IS HOW IT KNOWS WHICH POPUP TO USE
  // you are entering it at the very beginning when calling (using) the class
  // you tell it what it is, the rest of the code just processes it.
  constructor({
    popupSelector,
    buttonText,
    loadingButtonText,
    handleFormSubmit,
  }) {
    super({ popupSelector });

    this._popupForm = this.popupElement.querySelector(".modal__box");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this.popupElement.querySelector(".modal__button");
    this._buttonText = buttonText;
    this._loadingButtonText = loadingButtonText;
  }

  _getInputValues() {
    // get all field elements
    this._inputList = this._popupForm.querySelectorAll(".modal__input");
    // create an empty object
    this._formValues = {};
    // add values of the fields to this object
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    // return values object this._formValues will the the return when using this method.
    // using _getInputValues will give me the formValues of the form field that was
    // entered in the class constructor. This will have to be done for each form (place and edit).
    return this._formValues;
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // Add a _handleFormSubmit() function call
      // Pass an object which is the result of the _getInputValues work to it
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
