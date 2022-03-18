//
//___________________________________________________________________
//                 MODAL OPEN / CLOSE / HANDLERS                   //
//_________________________________________________________________//

//
// closes modal when ESC is pressed.
const handleEscapeButton = (evt) => {
  evt.preventDefault();
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".modal__is-opened"));
  }
};
// closes modal when clicked anywhere outside of it.

//**&*^(*&%^(*&^()&$#%#%$%$#^&)^$*^&%^*(&&*^%#&^%$(*@#@#$*(#&^(*@#%(&^@)))
export const handleClickOnOverlay = (evt) => {
  if (!evt.target.closest(".modal__container")) {
    closePopup(evt.currentTarget);
  }
};
//**&*^(*&%^(*&^()&$#%#%$%$#^&)^$*^&%^*(&&*^%#&^%$(*@#@#$*(#&^(*@#%(&^@)))
//**&*^(*&%^(*&^()&$#%#%$%$#^&)^$*^&%^*(&&*^%#&^%$(*@#@#$*(#&^(*@#%(&^@)))
// opens modals and listens for close options
export function openPopup(modal) {
  modal.addEventListener("click", handleClickOnOverlay);
  document.addEventListener("keydown", handleEscapeButton);
  modal.classList.add("modal__is-opened");
}
//**&*^(*&%^(*&^()&$#%#%$%$#^&)^$*^&%^*(&&*^%#&^%$(*@#@#$*(#&^(*@#%(&^@)))
// closes modals and removes listeners
export function closePopup(modal) {
  modal.removeEventListener("click", handleClickOnOverlay);
  document.removeEventListener("keydown", handleEscapeButton);
  modal.classList.remove("modal__is-opened");
}
//**&*^(*&%^(*&^()&$#%#%$%$#^&)^$*^&%^*(&&*^%#&^%$(*@#@#$*(#&^(*@#%(&^@)))+
