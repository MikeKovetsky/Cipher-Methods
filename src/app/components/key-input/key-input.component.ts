import {Component, EventEmitter, Output} from '@angular/core';
import {Equation} from "../../shared/Key/Equation/Equation";
import {Key} from "../../shared/Key/Key";

@Component({
  moduleId: module.id,
  selector: 'key-input',
  templateUrl: 'key-input.component.html',
})
export class KeyInputComponent {
  @Output() keyEmitter = new EventEmitter();

  key: Key;
  encryptionMethods = ['Ceasar',
    'Linear equation',
    'Quadratic equation',
    'Phrase',
    'Gamma',
    'Literature Excerpt'
  ];

  constructor() {
    this.key = new Key;
    this.key.equation = new Equation;
    this.key.encryptionMethod = this.encryptionMethods[0];
  }

  emitKey = function (key: Key) {
    this.keyEmitter.emit(key);
  };

  emitLiteratureExcerpt = function (ev: any): void {
    this.readThis(ev.target, (text: string) => {
      this.key.phrase = text;
      this.emitKey(this.key);
    });
  };

  readThis(inputValue: any, callback: any): void {
    let file: File = inputValue.files[0];
    let myReader: FileReader = new FileReader();

    myReader.onloadend = function () {
      callback(myReader.result);
    };
    myReader.readAsText(file);
  }

}
