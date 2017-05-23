import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  sourceText: string;
  updatedText: string;

  loadSourceText(ev: any): any{
    this.sourceText = ev;
  }

  updateText(ev: any): any{
    this.updatedText = ev;
  }
}
