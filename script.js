let edit = document.querySelector(".edit");
let editIcon = edit.querySelector(".edit__close-icon");
let editPopup = document.querySelector(".profile__edit");

function tog() {
  if (edit.style.display === "none") {
    edit.style.display = "block";
  } else {
    edit.style.display = "none";
  }
}

editPopup.addEventListener("click", tog);

editIcon.addEventListener("click", tog);

let formElement = edit;
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
}
let inputName = document.querySelector(".edit__name");
let inputTitle = document.querySelector(".edit__title");
