export class Api {
  constructor(options) {
    //constructor body
  }

  getInitalCards() {
    return fetch("https://around.nomoreparties.co/v1/group-42/cards", {
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // if the server returns an error, reject the promise
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

fetch("https://around.nomoreparties.co/v1/group-12/cards", {
  headers: {
    authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((result) => {
    git;
    console.log(result);
  });
