"use strict";
class RandomGenerator {
    constructor(seed) {
        this.seed = seed;
    }
    rand() {
        let x = Math.sin(this.seed++) * 10000;
        return Math.round(100 * (x - Math.floor(x)));
    }
}
exports.RandomGenerator = RandomGenerator;
//# sourceMappingURL=random-generator.js.map