const emailRegex= /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/;
const nameRegex= /^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/;
const biRegex = /^[0-9]{9}[a-zA-Z]{2}[0-9]{3}$/;
const telefoneRegex = /^[9]{1}[1-9]{1}[0-9]{1}-?[0-9]{3}-?[0-9]{3}$/;

export const validateEmail = new RegExp(emailRegex);
export const validatePassword = new RegExp(passwordRegex);
export const validateName = new RegExp(nameRegex);
export const validateBi = new RegExp(biRegex);
export const validateTelefone = new RegExp(telefoneRegex);