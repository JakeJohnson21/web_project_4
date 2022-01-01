let edit = document.querySelector(".edit");
let editIcon = edit.querySelector(".edit__close-icon");
let editPopup = document.querySelector(".profile__edit");
let personName = document.querySelector(".profile__main_name");
let personTitle = document.querySelector(".profile__text_explorer");
let nameInput = document.querySelector(".edit__name");
let titleInput = document.querySelector(".edit__title");
let save = document.querySelector(".save__input");

function tog() {
  if (edit.style.display === "none") {
    edit.style.display = "block";
  } else {
    edit.style.display = "none";
  }
}

editPopup.addEventListener("click", tog);
editIcon.addEventListener("click", tog);

function togglePopupVisibility() {
  if (!edit.classList.contains(".popup__is_opened")) {
    nameInput.value = personName.textContent;
    titleInput.value = personTitle.textContent;
  }

  edit.classList.toggle("popup__is_opened");
}

function formSubmitHandler(e) {
  e.preventDefault();

  personName.textContent = nameInput.value;
  personTitle.textContent = titleInput.value;
}
