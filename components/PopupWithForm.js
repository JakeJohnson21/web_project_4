import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  // THIS IS HOW IT KNOWS WHICH POPUP TO USE
  // you are entering it at the very beginning when calling (using) the class
  // you tell it what it is, the rest of the code just processes it.
  constructor({ /* -> */ popupSelector, /* <- */ handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    //     ^^^^^^^^^^^^^     ^^^^^^^^^^^
    //          |                 |
    // this is what connects       this is passed in when creating an instance
    // to the method in this       of the class in the other .js. This will be in
    // class.                      function format. The "popupSelector" will be the html class
    //                             and the "handleFormSubmit" will be a callback function.
  }

  _getTemplate() {
    const formElement = document
      .querySelector(this._popupSelector)
      .content.querySelector(".modal__box")
      .cloneNode(true);
    // return to get the result of this method
    //aka calling (using) this method is only to get the result
    // of the current popupSelector.
    return formElement;
  }
  _getInputValues() {
    // get all field elements
    this._inputList = this._element.querySelectorAll(".modal__input");
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

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // Add a _handleFormSubmit() function call
      // Pass an object which is the result of the _getInputValues work to it
      this._handleFormSubmit(this._getInputValues());

      this._element.reset();
    });
    this._element;
  }

  generateForm() {
    this._element = this._getTemplate();
    this._setEventListeners();

    return this._element;
  }
}
