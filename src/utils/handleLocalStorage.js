const userLogin = "user_login";
const accessToken = "accessToken";

export function saveUserLoginToLocalStorage(user) {
  localStorage.setItem(userLogin, user);
}

export function getTokenFromLocalStorage() {
  if (localStorage.getItem(userLogin)) {
    return JSON.parse(localStorage.getItem(userLogin))[accessToken];
  }
  return "not token";
}

export function getUserFromLocalStorage() {
  if (localStorage.getItem(userLogin)) {
    return JSON.parse(localStorage.getItem(userLogin));
  }
  return "not user";
}
