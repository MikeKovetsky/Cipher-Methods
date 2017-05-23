"use strict";
class Encryptor {
    constructor(alphabet, key) {
        this.alphabet = alphabet;
        this.key = key;
    }
    encrypt(inputText) {
        return this.crypt(inputText, this.key.value);
    }
    decrypt(inputText) {
        return this.crypt(inputText, -this.key.value);
    }
}
exports.Encryptor = Encryptor;
//# sourceMappingURL=Encryptor.js.map