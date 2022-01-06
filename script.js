//popup box
let edit = document.querySelector(".edit");
//the button on the main page to open the edit popup dialogue box
let editOpenPopup = document.querySelector(".profile__edit-button");
//the X to close out the popup
let editCloseIcon = edit.querySelector(".edit__close-button");
// The end point for the persons name
let personName = document.querySelector(".profile__main_name");
// The end point for explorer
let personTitle = document.querySelector(".profile__text_explorer");
//the name input field
let nameInput = document.querySelector(".edit__input_name");
//the title (explorer) input field
let titleInput = document.querySelector(".edit__input_title");
// the SAVE button
let save = document.querySelector(".edit__save");
//form edit box
let editBox = document.querySelector(".edit__box");

function closePopup() {
  edit.classList.toggle("edit");
}
function openPopup() {
  edit.classList.toggle("edit");
}
function ifFormIsEmpty() {
  if (nameInput.value.length === 0) {
    personName.textContent = "Jacques Cousteau";
  }
  if (titleInput.value.length === 0) {
    personTitle.textContent = "Explorer";
  }
}
function formSubmitHandler(evt) {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;
  ifFormIsEmpty();
  evt.preventDefault();
}
editOpenPopup.addEventListener("click", openPopup);
editCloseIcon.addEventListener("click", closePopup);
editBox.addEventListener("submit", formSubmitHandler);
save.addEventListener("click", closePopup);
