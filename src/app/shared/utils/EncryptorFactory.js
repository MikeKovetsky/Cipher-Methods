"use strict";
const CeasarEncryptor_1 = require("../Encryptors/CeasarEncryptor");
const EquationEncryptor_1 = require("../Encryptors/EquationEncryptor");
const PhraseEncryptor_1 = require("../Encryptors/PhraseEncryptor");
const GammaEncryptor_1 = require("../Encryptors/GammaEncryptor");
const LiteratureExcerptEncryptor_1 = require("../Encryptors/LiteratureExcerptEncryptor");
class EncryptorFactory {
    static createEncryptor(alphabet, key) {
        switch (key.encryptionMethod) {
            case 'Ceasar':
                return new CeasarEncryptor_1.CeasarEncryptor(alphabet, key);
            case 'Linear equation':
                return new EquationEncryptor_1.EquationEncryptor(alphabet, key);
            case 'Quadratic equation':
                return new EquationEncryptor_1.EquationEncryptor(alphabet, key);
            case 'Phrase':
                return new PhraseEncryptor_1.PhraseEncryptor(alphabet, key);
            case 'Gamma':
                return new GammaEncryptor_1.GammaEncryptor(alphabet, key);
            case 'Literature Excerpt':
                return new LiteratureExcerptEncryptor_1.LiteratureExcerptEncryptor(key.phrase, key);
            default:
                return null;
        }
    }
}
exports.EncryptorFactory = EncryptorFactory;
//# sourceMappingURL=EncryptorFactory.js.map