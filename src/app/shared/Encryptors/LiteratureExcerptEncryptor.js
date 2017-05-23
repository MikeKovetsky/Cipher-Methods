"use strict";
const Encryptor_1 = require("./Encryptor");
const Alphabet_1 = require("../Alphabet/Alphabet");
class LiteratureExcerptEncryptor extends Encryptor_1.Encryptor {
    constructor(alphabet, key) {
        super(alphabet, key);
        this.mappedAlphabet = Alphabet_1.Alphabet.mapAlphabet(alphabet);
    }
    encrypt(sourceText) {
        let cipherText = "";
        for (let symbol of sourceText) {
            let code = this.getSymbolCode(symbol);
            if (!code) {
                alert('Alphabet has no symbol: ' + symbol);
                return sourceText;
            }
            cipherText += code + " ";
        }
        return cipherText;
    }
    decrypt(sourceText) {
        let decryptedText = "";
        let codes = sourceText.split(' ');
        for (let code of codes) {
            if (this.mappedAlphabet[code])
                decryptedText += this.mappedAlphabet[code];
        }
        return decryptedText;
    }
    getSymbolCode(symbol) {
        let codesOfSymbol = [];
        for (let code in this.mappedAlphabet) {
            if (this.mappedAlphabet[code] === symbol) {
                codesOfSymbol.push(code);
            }
        }
        let randomIndex = Math.round((Math.random() * codesOfSymbol.length));
        return codesOfSymbol[randomIndex];
    }
    crypt(inputText, key) { return ''; }
}
exports.LiteratureExcerptEncryptor = LiteratureExcerptEncryptor;
//# sourceMappingURL=LiteratureExcerptEncryptor.js.map