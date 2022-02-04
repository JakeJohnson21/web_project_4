const formElement = document.querySelector(".modal__box");
const inputElement = formElement.querySelector(".modal__input");
const buttonElement = formElement.querySelector(".modal__button");

const showInputError = (formElement, input, errorMessage) => {
  const errorElement = formElement.querySelector(`#${input.id}-error`);
  input.classList.add("modal__input_type_error");
  errorElement.classList.add("modal__input-error_active");
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, input) => {
  const errorElement = document.querySelector(`#${input.id}-error`);
  console.log("errorElement", errorElement);
  console.log("className", `#${input.id}-error`);
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
    return !inputElement.validity.valid;
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
      console.log(inputElement);
      isValid(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

formElement.addEventListener("submit", (e) => e.preventDefault());

inputElement.addEventListener("input", isValid);

const enableValidation = () => {
  // this function is where all the issues come from.
  const formList = [...document.querySelectorAll(".modal__box")];
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement);
  });
};

enableValidation();
