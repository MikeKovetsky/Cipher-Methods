import {Equation} from "./Equation/Equation";

export class Key {
  value: number;
  encryptionMethod: string;
  equation: Equation;
  phrase: string;

  constructor() {
    this.value = 0;
    this.phrase = '';
  };

}
