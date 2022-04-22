export class Api {
  constructor(options) {
    //constructor body
  }

  getInitalCards() {
    return fetch("https://around.nomoreparties.co/v1/group-12/cards", {
      headers: {
        authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
        "Content-Type": "application/json",
      },
      body: {},
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
