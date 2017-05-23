export class RandomGenerator {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  rand() {
    let x = Math.sin(this.seed++) * 10000;
    return Math.round(100 * (x - Math.floor(x)));
  }
}
