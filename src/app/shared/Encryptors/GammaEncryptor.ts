import {Encryptor} from "./Encryptor";
import {RandomGenerator} from "../utils/random-generator";

export class GammaEncryptor extends Encryptor {

  public encrypt(inputText: string): string {
    return this.crypt(inputText);
  }

  public decrypt(inputText: string): string {
    return this.crypt(inputText);
  }

  protected crypt(inputText: string): string {
    if (inputText.length < this.key.value) {
      alert('input text length must be more than period value');
      return inputText;
    }
    let cypherText = '';
    let generator = new RandomGenerator(this.key.value);
    inputText.split('').forEach((symbol, i) => {
      let index = inputText.charCodeAt(i);
      cypherText += String.fromCharCode(index ^  generator.rand());
    });
    return cypherText;
  }
}
