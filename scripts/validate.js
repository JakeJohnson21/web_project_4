const formElement = document.querySelector(".modal__box");
const inputElement = formElement.querySelector(".modal__input");

const showInputError = (formElement, input, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  input.classList.add("modal__input_type_error");
  errorElement.classList.add("modal__input-error_active");
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, input) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  input.classList.remove("modal__input_type_error");
  errorElement.classList.remove("modal__input-error_active");
  errorElement.textContent = " ";
};

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.valitidy.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("modal__button_disabled");
  } else {
    buttonElement.classList.remove("modal__button_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = [...document.querySelectorAll(".modal__input")];

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputElement, formElement);
    });
  });
};
setEventListeners(formElement);

formElement.addEventListener("submit", (e) => e.preventDefault());

inputElement.addEventListener("input", isValid, toggleButtonState);

const enableValidation = (settings) => {
  const formList = [...document.querySelectorAll(".modal__box")];
  formList.forEach((formElement) => {
    formElement.addEventListener("input", (e) => e.preventDefault());
  });
};

enableValidation({
  formSelector: ".modal__box",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_visible",
});
