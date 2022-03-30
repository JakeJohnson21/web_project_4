export default class UserInfo {
  constructor({ userName, userTitle }) {
    this.userName = document.querySelector(userName);
    this.userTitle = document.querySelector(userTitle);
  }

  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userTitle: this.userTitle.textContent,
    };
  }

  setUserInfo({ name, title }) {
    this.userName.textContent = name;
    this.userTitle.textContent = title;
  }
}
