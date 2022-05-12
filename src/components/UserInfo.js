export default class UserInfo {
  constructor({ userName, userTitle, userImage }) {
    this.userName = document.querySelector(userName);
    this.userTitle = document.querySelector(userTitle);
    this.userImage = document.querySelector(userImage);
  }

  getUserInfo() {
    return {
      userName: this.userName.textContent,
      userTitle: this.userTitle.textContent,
    };
  }
  getProfileImage() {
    return {
      userImage: this.userImage.src,
    };
  }
  setUserInfo({ name, title }) {
    this.userName.textContent = name;
    this.userTitle.textContent = title;
  }
  setProfileImage({ link, name }) {
    this.userImage.src = link;
    this.userImage.alt = name;
  }
}
