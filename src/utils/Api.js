
fetch("https://around.nomoreparties.co/v1/group-12/cards", {
    headers: {
      authorization: "4661177c-aa9a-4f93-9cdc-32dae0d4e0e3",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
  
    GET "https://around.nomoreparties.co/v1/group-12/users/me";
  