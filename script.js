//popup box
let edit = document.querySelectorAll(".modal");
//the button on the main page to open the edit popup dialogue box
let editOpenPopup = document.querySelector(".profile__edit-button");
//the X to close out the popup
let editCloseIcon = document.querySelectorAll(".modal__close-button");
// The end point for the persons name
let personName = document.querySelector(".profile__title-name");
// The end point for explorer
let personTitle = document.querySelector(".profile__text-job");
//the name input field
let nameInput = document.querySelector(".modal__input_profile_name");
//the title (explorer) input field
let titleInput = document.querySelector(".modal__input_profile_title");
// the SAVE button
let save = document.querySelector(".modal__save");
//form edit box
let editBox = document.querySelector(".modal__box");
//add button
let addOpenPopup = document.querySelector(".profile__add");
//new place main modal
let modalPlace = document.querySelector(".modal__place");
//the photo title input field
let photoTitleInput = document.querySelector(".modal__input_image_title");
//the photo source input field
let photoInput = document.querySelector(".modal__input_image_link");
//The gallery image place for input
let galleryImage = document.querySelector;

function openPopup() {
  edit.classList.toggle("modal_none");
  titleInput.value = personTitle.textContent;
  nameInput.value = personName.textContent;
}
function closePopup() {
  edit.classList.toggle("modal_none");
}

function photoSubmitHandler(evt) {}

function formSubmitHandler(evt) {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;
  evt.preventDefault();
  closePopup();
}

// function ifFormIsEmpty() {
//   if (nameInput.value.length === 0) {
//     personName.textContent = "Jacques Cousteau";
//   }
//   if (titleInput.value.length === 0) {
//     personTitle.textContent = "Explorer";
//   }
// }
addOpenPopup.addEventListener("click", function () {
  edit.classList.toggle("modal_none");
});
editOpenPopup.addEventListener("click", openPopup);
editCloseIcon.addEventListener("click", closePopup);
editBox.addEventListener("submit", formSubmitHandler);

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
