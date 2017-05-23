import {Encryptor} from "./Encryptor";
import {Key} from "../Key/Key";
import {Alphabet} from "../Alphabet/Alphabet";

export class LiteratureExcerptEncryptor extends Encryptor {
  private mappedAlphabet: Object;

  constructor(alphabet: string, key: Key) {
    super(alphabet, key);
    this.mappedAlphabet = Alphabet.mapAlphabet(alphabet);
  }

  public encrypt(sourceText: string): string {
    let cipherText = "";
    for (let symbol of sourceText) {
      let code = this.getSymbolCode(symbol);
      if (!code) {
        alert('Alphabet has no symbol: ' + symbol);
        return sourceText;
      }
      cipherText += code  + " ";
    }
    return cipherText
  }

  public decrypt(sourceText: string): string {
    let decryptedText = "";
    let codes: Array<string> = sourceText.split(' ');
    for (let code of codes) {
      if (this.mappedAlphabet[code])
        decryptedText += this.mappedAlphabet[code];
    }
    return decryptedText;
  }

  private getSymbolCode (symbol: string): string {
    let codesOfSymbol: Array<string> = [];
    for (let code in this.mappedAlphabet) {
      if (this.mappedAlphabet[code] === symbol) {
        codesOfSymbol.push(code);
      }
    }
    let randomIndex: number = Math.round((Math.random() * codesOfSymbol.length));
    return codesOfSymbol[randomIndex];
  }

  protected crypt(inputText: string, key: number) { return ''; }

}
