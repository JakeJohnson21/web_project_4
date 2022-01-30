//---------------------------------------------------------------------------//
//       D                       DECLARATIONS                                //
//___________________________________________________________________________//
//
const formElement = document.querySelector(".modal__box");
const inputElement = formElement.querySelector(".modal__input");
const formError = formElement.querySelector(`.${inputElement.id}-error`);

const isValid = (formEl, inputEl) => {
  if (!inputElement.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};
//
formElement.addEventListener("input", function (evt) {
  console.log(evt.target.validity);
});
//
//

//
//---------------------------------------------------------------------------//
//                       SHOW / HIDE ERROR-MESSAGE                           //
//___________________________________________________________________________//
//
// if this doesn't work, check the errorEl / errorMessage.
// is that one element or two seperate ones.
const showInputError = (formEl, inputEl, errorMessage) => {
  const errorEl = formEl.querySelector(`.${inputEl}-error`);
  inputEl.classList.add("form__input_type_error");
  errorEl.textContent = errorMessage;
  errorEl.classList.add("form__input-error_active");
};
//__________________________________________________________________________//
//  hide error message                                                      //
const hideInputError = (formEl, inputEl) => {
  const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove("form__input_type_error");
  errorEl.textContent = "";
  errorEl.classList.remove("form__input-error_active");
};
//
//---------------------------------------------------------------------------//
//                               EVENT HANDLERS                              //
//___________________________________________________________________________//

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
});
//
inputElement.addEventListener("input", function () {
  isValid(formElement, inputElement);
});
//
const setEventListeners = (formEl, settings) => {
  const inputs = formEl.queryselectorAll(settings.inputSelector);
  inputs.forEach((input) => {
    inputs.addEventListener("", () => {});
  });
};
//
//---------------------------------------------------------------------------//
//                        ENABLE VALIDATION (OBJECT /)                       //
//___________________________________________________________________________//
//
const enableValidation = (settings) => {
  const formElements = [...document.queryselectorAll(settings.formSelector)];
  formElements.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formEl, settings);
  });
};
//
enableValidation({
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
});
//
//---------------------------------------------------------------------------//
//                               EVENT HANDLERS                              //
//___________________________________________________________________________//
// const formElement = document.querySelector(".modal__box");
// const formInput = formElement.querySelector(".modal__input");
// const formError = formElement.querySelector(`.${formInput.id}-error`);

// const showInputError = (formEl, inputEl, errorMessage) => {
//   const errorEl = formEl.querySelector(`#${inputEl.id}-error`);
//   inputEl.classList.add("form__input_type_error"); //need to create the css file for this class
//   errorEl.textContent = errorMessage;
//   errorEl.classList.add("form__input-error_active");
// };

// //___________________________________________________________________________//
// //  hides error message                                                      //

// //___________________________________________________________________________//
// //                                                                           //
// const enableValidation = (settings) => {
//   const formElements = [...document.querySelectorAll(settings.formSelector)];
//   formElements.forEach((formEl) => {
//     formEl.addEventListener("submit", (e) => e.preventDefault());
//     setEventListeners(formEl, settings);
//   });
// };
// //
// //___________________________________________________________________________//
// //
// const setEventListeners = (formEl, settings) => {
//   const inputs = [...formEl.querySelectorAll(settings.inputSelector)];
//   inputs.forEach((input) => {
//     input.addEventListener("input", (e) => {
//       //check validity
//       checkInputValidity(formEl, input, settings);
//       // toggle the button
//     });
//   });
// };

// //___________________________________________________________________________//
// //
// const checkInputValidity = (formEl, inputEl) => {
//   if (!inputEl.validity.valid) {
//     showInputError(formEl, inputEl, inputEl.validationMessage);
//   } else {
//     hideInputError(formEl, inputEl);
//   }
// };
// //___________________________________________________________________________//
// //

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput) {
//     buttonElement.classList.add("form__submit_inactive");
//     elsebuttonElement.classList.remove("form__submit_inactive");
//   }
// };

// const hasInvalidInput = (formEL, input) => {
//   console.log("hello");
// };
// // }
// // //---------------------------------------------------------------------------//
// //                         ENABLE VALIDATION OBJECT                          //
// //___________________________________________________________________________//
// //

// //
