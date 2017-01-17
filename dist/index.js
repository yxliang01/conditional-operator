"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addIf = addIf;
exports.subIf = subIf;
exports.multIf = multIf;
exports.divIf = divIf;
exports.modIf = modIf;


function addIf(ori, addWith, condition) {
    return condition ? ori + addWith : ori;
}

function subIf(ori, subWith, condition) {
    return condition ? ori - subWith : ori;
}

function multIf(ori, multWith, condition) {
    return condition ? ori * multWith : ori;
}

function divIf(ori, divWith, condition) {
    return condition ? ori / divWith : ori;
}

function modIf(ori, modWith, condition) {
    return condition ? ori % modWith : ori;
}
//# sourceMappingURL=index.js.map