import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Key} from "../../shared/Key/Key";
import {EncryptorFactory} from "../../shared/utils/EncryptorFactory";
import {Alphabet} from "../../shared/Alphabet/Alphabet";

@Component({
  moduleId: module.id,
  selector: 'body',
  templateUrl: 'body.component.html',
  providers: [Key]
})
export class BodyComponent {
  @Input() sourceText: string;
  @Output() updatedText = new EventEmitter();
  mode: boolean;
  key: Key;

  constructor() { this.mode = false }

  updateKey(ev: any) { this.key = ev; }

  run(mode: boolean, sourceText: string, key: Key): void {
    if (sourceText && key) {
      let alphabet = new Alphabet();
      let encryptor = EncryptorFactory.createEncryptor(alphabet.symbols, key);
      this.sourceText = mode ?
        encryptor.decrypt(sourceText) :
        encryptor.encrypt(sourceText)
    }
  }

}
