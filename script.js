//popup box
let edit = document.querySelector(".modal");
//the button on the main page to open the edit popup dialogue box
let editOpenPopup = document.querySelector(".profile__edit-button");
//the X to close out the popup
let editCloseIcon = document.querySelector(".modal__close-button");
// The end point for the persons name
let personName = document.querySelector(".profile__main_name");
// The end point for explorer
let personTitle = document.querySelector(".profile__text_explorer");
//the name input field
let nameInput = document.querySelector(".modal__input_name");
//the title (explorer) input field
let titleInput = document.querySelector(".modal__input_title");
// the SAVE button
let save = document.querySelector(".modal__save");
//form edit box
let editBox = document.querySelector(".modal__box");

function openPopup() {
  edit.classList.toggle("modal_none");
}
function closePopup() {
  edit.classList.toggle("modal_none");
}

function formSubmitHandler(evt) {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;
  ifFormIsEmpty();
  evt.preventDefault();
}

function ifFormIsEmpty() {
  if (nameInput.value.length === 0) {
    personName.textContent = "Jacques Cousteau";
  }
  if (titleInput.value.length === 0) {
    personTitle.textContent = "Explorer";
  }
}

editOpenPopup.addEventListener("click", openPopup);
editCloseIcon.addEventListener("click", closePopup);
editBox.addEventListener("submit", formSubmitHandler);
save.addEventListener("click", closePopup);

// function toggleFormVisibility() {
//   if (edit.style.display === "none") {
//     edit.style.display = "block";
//     edit;
//   } else {
//     edit.style.display = "none";
//   }
// }
// editOpenPopup.addEventListener("click", toggleFormVisibility);
// editCloseIcon.addEventListener("click", toggleFormVisibility);

// function formSubmitHandler(evt) {
//   personTitle.textContent = titleInput.value;
//   personName.textContent = nameInput.value;
//   ifFormIsEmpty();
//   evt.preventDefault();
// }
// editBox.addEventListener("submit", formSubmitHandler);
// save.addEventListener("click", toggleFormVisibility);
