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
let modalWindow = document.querySelector(".modal");
let editModalWindow = document.querySelector(".js-edit-modal");
let addModalWindow = document.querySelector(".js-add-modal");
//
//MODAL BOX
let editModalBox = editModalWindow.querySelector(".modal__box");
let addModalBox = addModalWindow.querySelector(".modal__box");
//
//---------------------------------------------------------------------------//
//      D                     INPUT DECLARATIONS                             //
//___________________________________________________________________________//
//
//PROFILE NAME
let nameInput = document.querySelector(".modal__input_profile_name");
//
//PROFILE TITLE
let titleInput = document.querySelector(".modal__input_profile_title");
//
//PLACE TITLE
let photoTitleInput = document.querySelector(".modal__input_image_title");
//
//PLACE PHOTO
let photoInput = document.querySelector(".modal__input_image_link");
//
//---------------------------------------------------------------------------//
//      D                INPUT END POINTS (DESTINATION)                      //
//___________________________________________________________________________//
//
//PROFILE NAME
let personName = document.querySelector(".profile__title-name");
//
//PROFILE TITLE
let personTitle = document.querySelector(".profile__text-job");
//
//PLACE TITLE
let cardPlace = document.querySelector(".card__place");
//
//PLACE PHOTO
let cardImage = document.querySelector(".card__image");
//
//---------------------------------------------------------------------------//
//      D                     BUTTON DECLARATIONS                            //
//___________________________________________________________________________//
//
//MODAL SUBMIT BUTTONS
let save = document.querySelector(".modal__save");
let create = document.querySelector(".modal__create");
//
//ClOSE MODAL BUTTONS
let editModalCloseBtn = editModalWindow.querySelector(".modal__close-button");
let addModalCloseBtn = addModalWindow.querySelector(".modal__close-button");
//
//OPEN MODAL BUTTONS
let editOpenPopup = document.querySelector(".profile__edit-button");
let addOpenPopup = document.querySelector(".profile__add");
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
//                                 LIKE BUTTON                               //
//___________________________________________________________________________//

document.querySelectorAll(".card__like-button").forEach((element) =>
  element.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like-button_active");
  })
);
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

  placeList.append(createCard);
}
//
//
// generate a card from the cloned template
function generateCard(card) {
  const cardItemElement = cardTemplate.cloneNode(true);
  cardItemElement.querySelector(".card__place").textContent = card.name;
  cardItemElement.querySelector(".card__image").src = card.link;
  return cardItemElement;
  //handleLikeIcon
  //handleDeletecC
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
editModalBox.addEventListener("submit", formSubmitHandler);
addModalBox.addEventListener("submit", formPlaceSubmitHandler);
