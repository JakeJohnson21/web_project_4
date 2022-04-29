import { initialCards } from "../utils/constants";

export class Api {
  constructor(options) {
    //constructor body
  }

  getInitialCards() {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }

  postNewCard(newCard) {
    fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      method: "POST",
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      })
      // .then((post) => {
      //   addPostToDOM(document.querySelector(), createPostMarkup(post));
      // })
      .catch((err) => console.log(err));
  }
  deleteCard() {
    fetch();
  }
  getProfileInfo() {}
  getProfilePic() {}
  updateProfilePic() {}
  getLikes() {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.log(err));
  }
  updateLikes() {
    fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  }

  //////////////////
  /// EDITING THE PROFILE
  //////////////////
  postNewProfile() {
    fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      method: "PATCH",
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Jake W Johnson",
        about: "Software Engineer",
      }),
    });
  }
}
