"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let ToolbarComponent = class ToolbarComponent {
    constructor() {
        this.sourceText = new core_1.EventEmitter();
    }
    emitSourceText(ev) {
        this.readThis(ev.target, (text) => {
            this.sourceText.emit(text);
        });
    }
    readThis(inputValue, callback) {
        let file = inputValue.files[0];
        let myReader = new FileReader();
        myReader.onloadend = function () {
            callback(myReader.result);
        };
        myReader.readAsText(file);
    }
    saveFile() {
        let blob = new Blob([this.updatedText], { type: "text/plain;charset=utf-8" });
        saveAs(blob, ".txt");
    }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], ToolbarComponent.prototype, "sourceText", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ToolbarComponent.prototype, "updatedText", void 0);
ToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'toolbar',
        templateUrl: 'toolbar.component.html',
    }), 
    __metadata('design:paramtypes', [])
], ToolbarComponent);
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map