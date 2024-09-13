import { emailRegex, passwordRegex, specialDigitsRegex } from "./regularExpressions"

export const validEmail = (email: string) => {
    if(email.length && emailRegex.test(email)) return true;
    return false;
}

export const validString = (text: string, minLenght: number) => {
    if(text.length > minLenght && !specialDigitsRegex.test(text) ) return true;
    return false;
}

export const validPassword = (text: string) => {
    if(passwordRegex.test(text)) return true;
    return false;
}