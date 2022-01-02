//popup box
let edit = document.querySelector(".edit");
//the button on the main page to open the edit popup dialogue box
let editPopup = document.querySelector(".profile__edit");
//the X to close out the popup
let editIcon = edit.querySelector(".edit__close-icon");
// The end point for the persons name
let personName = document.querySelector(".profile__main_name");
// The end point for explorer
let personTitle = document.querySelector(".profile__text_explorer");
//the name input field
let nameInput = document.querySelector(".edit__name");
//the title (explorer) input field
let titleInput = document.querySelector(".edit__title");
// the SAVE button
let save = document.querySelector(".edit__save");
//form edit box
let editBox = document.querySelector(".edit__box");
function tog() {
  if (edit.style.display === "none") {
    edit.style.display = "block";
  } else {
    edit.style.display = "none";
  }
}
editPopup.addEventListener("click", tog);
editIcon.addEventListener("click", tog);

function toggleModalVisibility() {
  console.log((titleInput.value = personTitle.textContent));
  nameInput.value = personName.textContent;
}

function formSubmitHandler(evt) {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;

  evt.preventDefault();
}
save.addEventListener("submit", formSubmitHandler);
