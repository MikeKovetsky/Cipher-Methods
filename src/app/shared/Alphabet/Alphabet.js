"use strict";
class Alphabet {
    constructor() {
        let alphabets = [
            'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
            'abcdefghijklmnopqrstuvwxyz'
        ];
        let specialSymbols = ',.\n\t :`\'1234567890';
        this.symbols = specialSymbols + alphabets.map(alphabet => {
            return alphabet + alphabet.toUpperCase();
        });
    }
    static mapAlphabet(alphabet) {
        let mappedAlphabet = {};
        let row = 1;
        let column = 1;
        for (let symbol of alphabet) {
            let key = '';
            key += (row < 10) ? "0" + row : row;
            key += (column < 10) ? "0" + column : column;
            mappedAlphabet[key] = symbol;
            if (symbol === "\n") {
                row++;
                column = 1;
            }
            else
                column++;
        }
        return mappedAlphabet;
    }
}
exports.Alphabet = Alphabet;
//# sourceMappingURL=Alphabet.js.map