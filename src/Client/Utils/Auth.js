
const setUserStorage = ({ result: { sub } }) =>
  localStorage.setItem('sub', JSON.stringify(sub))

const getUserToken = () => JSON.parse(localStorage.getItem('sub'))

const deleteUser = () => localStorage.removeItem('sub')

//Get wherever cookie by its name
const getCookie = (cookieName) => 
  RegExp(`${cookieName}=[^;]+`).exec(document.cookie)

export {
  setUserStorage,
  getUserToken,
  deleteUser,
  getCookie
}