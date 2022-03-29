export default class UserInfo {
  constructor({ userName, userTitle }) {
    this.userName = document.querySelector(userName);
    this.userTitle = document.querySelector(userTitle);
  }

  getUserInfo() {
    return {
      userName: this.userNameText,
      userTitle: this.userTitleText,
    };
  }

  setUserInfo({ userNameText, userTitleText }) {
    this.userName.textContent = userNameText;
    this.userTitle.textContent = userTitleText;
  }
}
