class FormValidator {
  constructor(formElement, settings) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    //---------------------
    this._form = formElement;
    ////////////////////
  } //
  ////
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
  ///////////////// * Done *
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }
  ///////////////// * Done *
  _toggleButtonState() {
    if (hasInvalidInput()) {
      this._buttonElement.disabled = true;
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  } ///////////////
  ///////////////// * Done *
  _checkIfValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  ///////////////// * Done *
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }
  /////////////////
  _setEventListeners() {
    this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    //-------------------------
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        _checkIfValid(this._inputSelector);
        _toggleButtonState(this._inputSelector);
      });
    });
  }
  /////////////////
  enableValidation() {
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
