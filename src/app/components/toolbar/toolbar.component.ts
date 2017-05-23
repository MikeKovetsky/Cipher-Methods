import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
})

export class ToolbarComponent {
  @Output() sourceText = new EventEmitter();
  @Input() updatedText: string;

  emitSourceText(ev: any): void {
    this.readThis(ev.target, (text: string) => {
      this.sourceText.emit(text);
    });
  }

  readThis(inputValue: any, callback: any): void {
    let file: File = inputValue.files[0];
    let myReader: FileReader = new FileReader();

    myReader.onloadend = function () {
      callback(myReader.result);
    };
    myReader.readAsText(file);
  }

  saveFile() {
    let blob = new Blob([this.updatedText], {type: "text/plain;charset=utf-8"});
    saveAs(blob, ".txt");
  }
}
