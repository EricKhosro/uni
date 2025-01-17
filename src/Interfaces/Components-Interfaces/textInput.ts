export type TextInputKinds =
  | "price"
  | "number"
  | "farsiAlphabet"
  | "farsiAlphabetAndNumbers"
  | "englishAlphabet"
  | "englishAlphabetAndNumbers"
  | "englishAlphabetAndNumbersAndSpecialCharacters"
  | "cellPhoneNumber"
  | "username"
  | "phoneNumber"
  | "percent"
  | "pan";

export interface ITextInputValidatorResponse {
  error: string | null;
  isValid: boolean;
}
