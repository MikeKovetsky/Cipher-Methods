"use strict";
const Encryptor_1 = require("./Encryptor");
class CeasarEncryptor extends Encryptor_1.Encryptor {
    crypt(inputText, key) {
        let result = '';
        for (let symbol of inputText) {
            let y = this.alphabet.indexOf(symbol);
            let x = (y + key) % this.alphabet.length;
            if (x >= 0)
                result += this.alphabet[x];
            else
                result += this.alphabet[x + this.alphabet.length];
        }
        return result;
    }
}
exports.CeasarEncryptor = CeasarEncryptor;
//# sourceMappingURL=CeasarEncryptor.js.map