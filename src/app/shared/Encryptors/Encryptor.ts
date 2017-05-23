import {Key} from "../Key/Key";

export abstract class Encryptor {
  protected alphabet: string;
  protected key: Key;

  constructor(alphabet: string, key: Key) {
    this.alphabet = alphabet;
    this.key = key;
  }

  encrypt(inputText: string): string {
    return this.crypt(inputText, this.key.value);
  }
  decrypt(inputText: string): string {
    return this.crypt(inputText, -this.key.value);
  }
  protected abstract crypt(inputText: string, key: number, t?: number): string;

}
