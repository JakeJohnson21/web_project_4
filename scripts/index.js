//---------------------------------------------------------------------------//
//                           INITIAL CARDS ARRAY                             //
//___________________________________________________________________________//

const initialCards = [
  {
    name: "Milwaukee, Wisconsin",
    link: "images/milwaukee.jpg",
  },
  {
    name: "Chicago, Illinois",
    link: "images/chicago.jpg",
  },
  {
    name: "Waikiki Beach O'ahu",
    link: "images/waikiki.jpg",
  },
  {
    name: "Sydney Harbour, Australia",
    link: "images/sydney.jpg",
  },
  {
    name: "London, England",
    link: "images/london.jpg",
  },
  {
    name: "Dubai",
    link: "images/dubai.jpg",
  },
];

//---------------------------------------------------------------------------//
//       D                  CARD CONTAINER (GALLERY)                         //
//___________________________________________________________________________//
//
const placeList = document.querySelector(".cards");
//
//---------------------------------------------------------------------------//
//       D                    MODAL DECLARATIONS                             //
//___________________________________________________________________________//
//
//GENERAL MODAL WINDOW
const modal = document.querySelector(".modal");
//MODAL WINDOW
const editModalWindow = document.querySelector(".js-edit-modal");
const addModalWindow = document.querySelector(".js-add-modal");
const previewImageModalWindow = document.querySelector(".js-preview-modal");
//
//MODAL BOX
const editModalBox = editModalWindow.querySelector(".modal__box");
const addModalBox = addModalWindow.querySelector(".modal__box");

//
//PREVIEW
const previewImageElement = document.querySelector(".modal__preview-image");

//---------------------------------------------------------------------------//
//      D                     INPUT DECLARATIONS                             //
//___________________________________________________________________________//
//
//PROFILE NAME
const nameInput = document.querySelector(".modal__input_profile_name");
//
//PROFILE TITLE
const titleInput = document.querySelector(".modal__input_profile_title");
//
//PLACE TITLE
const photoTitleInput = document.querySelector(".modal__input_image_title");
//
//PLACE PHOTO
const photoInput = document.querySelector(".modal__input_image_link");
//
//MODAL CONTAINER
const modalContainer = document.querySelector(".modal__container");
//---------------------------------------------------------------------------//
//      D                INPUT END POINTS (DESTINATION)                      //
//___________________________________________________________________________//
//
//PROFILE NAME
const personName = document.querySelector(".profile__title-name");
//
//PROFILE TITLE
const personTitle = document.querySelector(".profile__text-job");
//
//PLACE TITLE

//
//PLACE PHOTO
const cardImage = document.querySelector(".card__image");

const previewCaption = document.querySelector(".modal__preview-text");
//
//---------------------------------------------------------------------------//
//      D                     BUTTON DECLARATIONS                            //
//___________________________________________________________________________//
//
//MODAL SUBMIT BUTTONS
const editProfileButton = document.querySelector(".modal__save");
const addPlaceButton = document.querySelector(".modal__create");
//
//ClOSE MODAL BUTTONS
const editModalCloseButton = editModalWindow.querySelector(
  ".modal__close-button"
);
const addModalCloseButton = addModalWindow.querySelector(
  ".modal__close-button"
);
const previewImageCloseButton = previewImageModalWindow.querySelector(
  ".modal__close-button"
);
//
//OPEN MODAL BUTTONS
const editProfilePopupButton = document.querySelector(".profile__edit-button");
const addPlacePopupButton = document.querySelector(".profile__add");
//
//---------------------------------------------------------------------------//
//       D               CARD TEMPLATE DECLARATION                           //
//___________________________________________________________________________//
//
//the card template object
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__item");
//
//---------------------------------------------------------------------------//
//                            OPEN / CLOSE POPUP                             //
//___________________________________________________________________________//
const handleEscapeButton = (evt) => {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".modal__is-opened"));
  }
};
const handleClickOnOverlay = (modal, evt) => {
  if (!evt.target.closest(".modal__container")) {
    closePopup(modal);
  }
};

function openPopup(modal) {
  document.addEventListener("click", handleClickOnOverlay);
  document.addEventListener("keydown", handleEscapeButton);
  modal.classList.add("modal__is-opened");
}

function closePopup(modal) {
  document.removeEventListener("click", handleClickOnOverlay);
  document.removeEventListener("keydown", handleEscapeButton);
  modal.classList.remove("modal__is-opened");
}

//---------------------------------------------------------------------------//
//                                SUBMIT HANDLER                             //
//___________________________________________________________________________//
//
//
///Edit profile handler
function handleFormSubmit(evt) {
  evt.preventDefault();
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;

  closePopup(editModalWindow);
}
//
/// Edit place handler
function handleFormPlaceSubmit(evt) {
  evt.preventDefault();
  const name = photoTitleInput.value;
  const link = photoInput.value;

  const newCard = generateCard({ name, link });
  closePopup(addModalWindow);
  renderCard(newCard, placeList);
}
//
//
//---------------------------------------------------------------------------//
//                                CARD FUNCTIONS                             //
//___________________________________________________________________________//
//
//

//
//

// generate a card from the cloned template
function generateCard(card) {
  //initialize clone of the template card
  const cardItemElement = cardTemplate.cloneNode(true);
  //declaring the place title input target
  const cardTitle = cardItemElement.querySelector(".card__place");
  cardTitle.textContent = card.name;
  //declaring image element
  const imageEl = cardItemElement.querySelector(".card__image");
  imageEl.src = card.link;
  imageEl.alt = card.name;

  //listening to show popup image preview.
  imageEl.addEventListener("click", function () {
    previewImageElement.src = card.link;
    previewCaption.textContent = card.name;
    previewImageElement.alt = card.name;

    openPopup(previewImageModalWindow);
  });

  //handleLikeIcon
  const cardLikeButton = cardItemElement.querySelector(".card__like-button");
  cardLikeButton.addEventListener("click", function () {
    cardLikeButton.classList.toggle("card__like-button_active");
  });
  //handleDeletecCard
  const trashEl = cardItemElement.querySelector(".card__trash");
  trashEl.addEventListener("click", function () {
    cardItemElement.remove();
  });

  return cardItemElement;
}
//
function renderCard(card, container) {
  container.prepend(card);
}
//
//initial cards
initialCards.forEach(function (card) {
  const newCard = generateCard(card);
  renderCard(newCard, placeList);
});
//

//
//---------------------------------------------------------------------------//
//                                EVENT LISTENERS                            //
//___________________________________________________________________________//

editProfilePopupButton.addEventListener("click", () => {
  titleInput.value = personTitle.textContent;
  nameInput.value = personName.textContent;
  openPopup(editModalWindow);
});
addPlacePopupButton.addEventListener("click", () => {
  hasInvalidInput();
  openPopup(addModalWindow);
});
editModalCloseButton.addEventListener("click", () =>
  closePopup(editModalWindow)
);
addModalCloseButton.addEventListener("click", () => closePopup(addModalWindow));
previewImageCloseButton.addEventListener("click", () =>
  closePopup(previewImageModalWindow)
);

editModalBox.addEventListener("submit", handleFormSubmit);
addModalBox.addEventListener("submit", handleFormPlaceSubmit);
//
