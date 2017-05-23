import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from "@angular/material";

import {AppComponent}  from './app.component';
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {FormsModule} from "@angular/forms";
import {BodyComponent} from "./components/body/body.component";
import {KeyInputComponent} from "./components/key-input/key-input.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, ToolbarComponent, BodyComponent, KeyInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
