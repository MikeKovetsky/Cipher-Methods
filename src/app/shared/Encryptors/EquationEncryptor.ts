import {Encryptor} from "./Encryptor";

export class EquationEncryptor extends Encryptor {

  decrypt(inputText: string): string {
    let result: string = '';
    for (let i = 0; i < inputText.length; i++) {
      let k = this.key.equation.calculate(i);
      result += this.crypt(inputText, -k, i);
    }
    return result;
  }

  encrypt(inputText: string): string {
    let result: string = '';
    for (let i = 0; i < inputText.length; i++) {
      let k = this.key.equation.calculate(i);
      result += this.crypt(inputText, k, i);
    }
    return result;
  }

  protected crypt(inputText: string, offset: number, t: number): string {
    let m = this.alphabet.indexOf(inputText[t]);
    let l = (m + offset) % this.alphabet.length;
    return (l >= 0) ? this.alphabet[l] : this.alphabet[l + this.alphabet.length];
  }

}
