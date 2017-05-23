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
const Equation_1 = require("../../shared/Key/Equation/Equation");
const Key_1 = require("../../shared/Key/Key");
let KeyInputComponent = class KeyInputComponent {
    constructor() {
        this.keyEmitter = new core_1.EventEmitter();
        this.encryptionMethods = ['Ceasar',
            'Linear equation',
            'Quadratic equation',
            'Phrase',
            'Gamma',
            'Literature Excerpt'
        ];
        this.emitKey = function (key) {
            this.keyEmitter.emit(key);
        };
        this.emitLiteratureExcerpt = function (ev) {
            this.readThis(ev.target, (text) => {
                this.key.phrase = text;
                this.emitKey(this.key);
            });
        };
        this.key = new Key_1.Key;
        this.key.equation = new Equation_1.Equation;
        this.key.encryptionMethod = this.encryptionMethods[0];
    }
    readThis(inputValue, callback) {
        let file = inputValue.files[0];
        let myReader = new FileReader();
        myReader.onloadend = function () {
            callback(myReader.result);
        };
        myReader.readAsText(file);
    }
};
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], KeyInputComponent.prototype, "keyEmitter", void 0);
KeyInputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'key-input',
        templateUrl: 'key-input.component.html',
    }), 
    __metadata('design:paramtypes', [])
], KeyInputComponent);
exports.KeyInputComponent = KeyInputComponent;
//# sourceMappingURL=key-input.component.js.map