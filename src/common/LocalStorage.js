import { LOCAL_STORAGE_TODOS, LOCAL_STORAGE_USERS } from "./constants";
  
var CryptoJS = require("crypto-js");

const encryptData = (data) => {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'lenden-club-investor-web').toString();
    return ciphertext
}

const decryptData = (data) => {
    let bytes = CryptoJS.AES.decrypt(data, 'lenden-club-investor-web');
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData
}

export const setUsers = (data) =>{
    // localStorage.setItem(LOCAL_STORAGE_USERS, data);
    localStorage.setItem(LOCAL_STORAGE_USERS, encryptData(JSON.stringify(data)));
}
  
export const setTodos = (data) => {
    // localStorage.setItem(LOCAL_STORAGE_TODOS, data);
    localStorage.setItem(LOCAL_STORAGE_TODOS, encryptData(JSON.stringify(data)));
}

export const getUsers = () =>{
    // return localStorage.getItem(LOCAL_STORAGE_USERS)
    return localStorage.getItem(LOCAL_STORAGE_USERS) ? JSON.parse(decryptData(localStorage.getItem(LOCAL_STORAGE_USERS))) : null;
}

export const getTodos = () =>{
    // return  JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS));
    return localStorage.getItem(LOCAL_STORAGE_TODOS) ? JSON.parse(decryptData(localStorage.getItem(LOCAL_STORAGE_TODOS))) : null;
}
