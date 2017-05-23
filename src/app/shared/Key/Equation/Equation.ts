export class Equation {
  x1: number;
  x2: number;
  x3: number;

  constructor() {
    this.x1 = this.x2 = this.x3 = 0;
  }

  calculate(t: number): number {
    return this.x1*t*t + this.x2*t + this.x3;
  }
}
