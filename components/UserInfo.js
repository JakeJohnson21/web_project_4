class UserInfo {
  constructor({ userName, userTitle }, popupSelector) {
    this.userName = document.querySelector(userName);
    this.userTitle = document.querySelector(userTitle);
  }

  getUserInfo() {
    return {
      userName: this.userNameText.textContent,
      userTitle: this.userTitleText.textContent,
    };
  }

  setUserInfo(userNameText, userTitleText) {
    this.userName.textContent = userNameText;
    this.userTitle.textContent = userTitleText;
  }
}
