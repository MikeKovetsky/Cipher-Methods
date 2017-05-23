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
var core_1 = require('@angular/core');
var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.sourceText = new core_1.EventEmitter();
    }
    ToolbarComponent.prototype.changeListener = function (ev) {
        this.readThis(ev.target);
    };
    ToolbarComponent.prototype.readThis = function (inputValue) {
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            // you can perform an action with readed data here
            myReader.result;
        };
        myReader.readAsText(file);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "sourceText", void 0);
    ToolbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toolbar',
            templateUrl: 'toolbar.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
//# sourceMappingURL=toolbar.component.js.map