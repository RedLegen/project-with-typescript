"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NameServices = /** @class */ (function () {
    function NameServices() {
    }
    NameServices.prototype.sendMassge = function (_a) {
        var to = _a.to, massge = _a.massge;
        alert("Enviado para " + to.name + ": " + massge.subject);
    };
    return NameServices;
}());
exports.default = NameServices;
