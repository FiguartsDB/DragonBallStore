
const setLocalStorage = (key, data ) =>
  localStorage.setItem(key, JSON.stringify(data))

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

const deleteStorage = (key) => localStorage.removeItem(key)

//Get wherever cookie by its name
const getCookie = (cookieName) => 
  RegExp(`${cookieName}=[^;]+`).exec(document.cookie)

export {
  setLocalStorage,
  getLocalStorage,
  deleteStorage,
  getCookie
}