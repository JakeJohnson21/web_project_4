const likes = document.querySelector(".card__like-text");

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
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
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
          // return Promise.reject(`Error: ${res.status}`);
        }
      })
      .catch((err) => console.log(err));
  }
  deleteCard(cardId) {
    return fetch(`https://around.nomoreparties.co/v1/groupId/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`ERROR: ${res.status}`);
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  getProfileInfo() {}
  getProfilePic() {}
  updateProfilePic(newProfilePic) {
    return fetch(
      "https://around.nomoreparties.co/v1/group-12/users/me/avatar ",
      {
        method: "PATCH",
        body: JSON.stringify({
          avatar: newProfilePic.link,
        }),
        headers: {
          authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
      })
      .catch((err) => console.log(err));
  }
  getLikes(cardId) {
    return fetch(
      `https://around.nomoreparties.co/v1/group-12/cards/likes/${cardId}`,
      {
        headers: {
          authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          // if the server returns an error, reject the promise
          return Promise.reject(`Error: ${res.status}`);
        }
      })

      .catch((err) => console.log(err));
  }

  addLikes() {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      method: "PUT",
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json();
        } else {
          // if the server returns an error, reject the promise
          return Promise.reject(`Error: ${res.status}`);
        }
      })

      .catch((err) => console.log(err));
  }
  removeLike() {
    fetch(`https://around.nomoreparties.co/v1/group-12/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {});
  }
  getOwnerId() {
    return fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }
  getUserInfo() {
    return fetch("https://around.nomoreparties.co/v1/group-12/users", {
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }
  //////////////////
  /// EDITING THE PROFILE
  //////////////////
  postNewProfile(newProfile) {
    fetch("https://around.nomoreparties.co/v1/group-12/users/me", {
      method: "PATCH",
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newProfile.name,
        about: newProfile.about,
      }),
    });
  }
}
