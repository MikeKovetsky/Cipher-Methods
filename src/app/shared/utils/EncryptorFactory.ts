import {Key} from "../Key/Key";
import {Encryptor} from "../Encryptors/Encryptor";
import {CeasarEncryptor} from "../Encryptors/CeasarEncryptor";
import {EquationEncryptor} from "../Encryptors/EquationEncryptor";
import {PhraseEncryptor} from "../Encryptors/PhraseEncryptor";
import {GammaEncryptor} from "../Encryptors/GammaEncryptor";
import {LiteratureExcerptEncryptor} from "../Encryptors/LiteratureExcerptEncryptor";

export abstract class EncryptorFactory{
  public static createEncryptor(alphabet: string, key: Key) : Encryptor {
    switch (key.encryptionMethod) {
      case 'Ceasar':
        return new CeasarEncryptor(alphabet, key);
      case 'Linear equation':
        return new EquationEncryptor(alphabet, key);
      case 'Quadratic equation':
        return new EquationEncryptor(alphabet, key);
      case 'Phrase':
        return new PhraseEncryptor(alphabet, key);
      case 'Gamma':
        return new GammaEncryptor(alphabet, key);
      case 'Literature Excerpt':
        return new LiteratureExcerptEncryptor(key.phrase, key);
      default:
        return null;
    }
  }
}
