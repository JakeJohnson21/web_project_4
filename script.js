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
//MODAL WINDOW
const modalWindow = document.querySelector(".modal");
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
const cardPlace = document.querySelector(".card__place");
//
//PLACE PHOTO
const cardImage = document.querySelector(".card__image");
//
//---------------------------------------------------------------------------//
//      D                     BUTTON DECLARATIONS                            //
//___________________________________________________________________________//
//
//MODAL SUBMIT BUTTONS
const save = document.querySelector(".modal__save");
const create = document.querySelector(".modal__create");
//
//ClOSE MODAL BUTTONS
const editModalCloseBtn = editModalWindow.querySelector(".modal__close-button");
const addModalCloseBtn = addModalWindow.querySelector(".modal__close-button");
const previewImageCloseBtn = previewImageModalWindow.querySelector(
  ".modal__close-button"
);
//
//OPEN MODAL BUTTONS
const editOpenPopup = document.querySelector(".profile__edit-button");
const addOpenPopup = document.querySelector(".profile__add");
//
//---------------------------------------------------------------------------//
//       D               CARD TEMPLATE DECLARATION                           //
//___________________________________________________________________________//
//
//the card template object
let cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card__item");
//
//---------------------------------------------------------------------------//
//                            OPEN / CLOSE POPUP                             //
//___________________________________________________________________________//

function openPopup(modal) {
  modal.classList.toggle("modal_none");
  // titleInput.value = personTitle.textContent;
  // nameInput.value = personName.textContent;
}

function closePopup(modal) {
  modal.classList.toggle("modal_none");
}

//---------------------------------------------------------------------------//
//                                SUBMIT HANDLER                             //
//___________________________________________________________________________//
//
//
///Edit profile handler
function formSubmitHandler(evt) {
  personTitle.textContent = titleInput.value;
  personName.textContent = nameInput.value;
  evt.preventDefault();
  closePopup();
}
//
/// Edit place handler
function formPlaceSubmitHandler(evt) {
  cardPlace.textContent = photoTitleInput.value;
  cardImage.src = `url( ${photoInput.value})`;

  evt.preventDefault();
  closePopup();
}
//
//
//---------------------------------------------------------------------------//
//                                CARD FUNCTIONS                             //
//___________________________________________________________________________//
//
//
function createCard() {
  photoTitleInput.value = cardPlace.textContent;
  photoInput.value = cardImage.src;
  generateCard();
  placeList.append(createCard);
}
//
//
// generate a card from the cloned template
function generateCard(card) {
  const cardItemElement = cardTemplate.cloneNode(true);
  cardItemElement.querySelector(".card__place").textContent = card.name;
  const imageEl = cardItemElement.querySelector(".card__image");
  imageEl.src = card.link;
  imageEl.addEventListener("click", function () {
    previewImageElement.src = card.link;
    openPopup(previewImageModalWindow);
  });
  //handleLikeIcon
  const cardEl = cardItemElement.querySelector(".card__like-button");
  cardEl.addEventListener("click", function () {
    cardEl.classList.toggle("card__like-button_active");
  });
  //handleDeletecCard
  const trashEl = cardItemElement.querySelector(".card__trash");
  trashEl.addEventListener("click", function (e) {
    cardTemplate.remove(cardTemplate.querySelector("card__item"));
  });

  return cardItemElement;
}
//
function renderCard(card, container) {
  container.append(card);
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

editOpenPopup.addEventListener("click", () => openPopup(editModalWindow));
addOpenPopup.addEventListener("click", () => openPopup(addModalWindow));
editModalCloseBtn.addEventListener("click", () => closePopup(editModalWindow));
addModalCloseBtn.addEventListener("click", () => closePopup(addModalWindow));
previewImageCloseBtn.addEventListener("click", () =>
  closePopup(previewImageModalWindow)
);

editModalBox.addEventListener("submit", formSubmitHandler);
addModalBox.addEventListener("submit", formPlaceSubmitHandler);
