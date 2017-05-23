"use strict";
const Encryptor_1 = require("./Encryptor");
class PhraseEncryptor extends Encryptor_1.Encryptor {
    decrypt(inputText) {
        let result = '';
        for (let i = 0; i < inputText.length; i++) {
            let k = this.alphabet.indexOf(this.key.phrase[i % this.key.phrase.length]);
            result += this.crypt(inputText, -k, i);
        }
        return result;
    }
    encrypt(inputText) {
        let result = '';
        for (let i = 0; i < inputText.length; i++) {
            let k = this.alphabet.indexOf(this.key.phrase[i % this.key.phrase.length]);
            result += this.crypt(inputText, k, i);
        }
        return result;
    }
    crypt(inputText, offset, t) {
        let m = this.alphabet.indexOf(inputText[t]);
        let l = (m + offset) % this.alphabet.length;
        return (l >= 0) ?
            this.alphabet[l] :
            this.alphabet[l + this.alphabet.length];
    }
}
exports.PhraseEncryptor = PhraseEncryptor;
//# sourceMappingURL=PhraseEncryptor.js.map