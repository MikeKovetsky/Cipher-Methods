"use strict";
const Encryptor_1 = require("./Encryptor");
const random_generator_1 = require("../utils/random-generator");
class GammaEncryptor extends Encryptor_1.Encryptor {
    encrypt(inputText) {
        return this.crypt(inputText);
    }
    decrypt(inputText) {
        return this.crypt(inputText);
    }
    crypt(inputText) {
        if (inputText.length < this.key.value) {
            alert('input text length must be more than period value');
            return inputText;
        }
        let cypherText = '';
        let generator = new random_generator_1.RandomGenerator(this.key.value);
        inputText.split('').forEach((symbol, i) => {
            let index = inputText.charCodeAt(i);
            cypherText += String.fromCharCode(index ^ generator.rand());
        });
        return cypherText;
    }
}
exports.GammaEncryptor = GammaEncryptor;
//# sourceMappingURL=GammaEncryptor.js.map