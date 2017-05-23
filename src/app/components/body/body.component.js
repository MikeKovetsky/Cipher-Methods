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
const Key_1 = require("../../shared/Key/Key");
const EncryptorFactory_1 = require("../../shared/utils/EncryptorFactory");
const Alphabet_1 = require("../../shared/Alphabet/Alphabet");
let BodyComponent = class BodyComponent {
    constructor() {
        this.updatedText = new core_1.EventEmitter();
        this.mode = false;
    }
    updateKey(ev) { this.key = ev; }
    run(mode, sourceText, key) {
        if (sourceText && key) {
            let alphabet = new Alphabet_1.Alphabet();
            let encryptor = EncryptorFactory_1.EncryptorFactory.createEncryptor(alphabet.symbols, key);
            this.sourceText = mode ?
                encryptor.decrypt(sourceText) :
                encryptor.encrypt(sourceText);
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], BodyComponent.prototype, "sourceText", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], BodyComponent.prototype, "updatedText", void 0);
BodyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'body',
        templateUrl: 'body.component.html',
        providers: [Key_1.Key]
    }), 
    __metadata('design:paramtypes', [])
], BodyComponent);
exports.BodyComponent = BodyComponent;
//# sourceMappingURL=body.component.js.map