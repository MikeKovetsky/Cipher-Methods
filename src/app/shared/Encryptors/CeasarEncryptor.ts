import {Encryptor} from "./Encryptor";

export class CeasarEncryptor extends Encryptor {

  protected crypt(inputText: string, key: number): string {
    let result: string = '';
    for (let symbol of inputText) {
      let y = this.alphabet.indexOf(symbol);
      let x = (y + key) % this.alphabet.length;
      if (x >= 0) result += this.alphabet[x];
      else result += this.alphabet[x + this.alphabet.length]
    }
    return result;
  }

}
