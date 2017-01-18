"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.addIf = addIf;
exports.subIf = subIf;
exports.multIf = multIf;
exports.divIf = divIf;
exports.modIf = modIf;
exports.addChainMember = addChainMember;


addChainMember(Number.prototype);
addChainMember(String.prototype);

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

function addChainMember(obj) {
    obj.addIf = function () {
        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        return addIf.apply(undefined, _toConsumableArray([this.valueOf()].concat(arg)));
    };
    obj.subIf = function () {
        for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            arg[_key2] = arguments[_key2];
        }

        return subIf.apply(undefined, _toConsumableArray([this.valueOf()].concat(arg)));
    };
    obj.multIf = function () {
        for (var _len3 = arguments.length, arg = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            arg[_key3] = arguments[_key3];
        }

        return multIf.apply(undefined, _toConsumableArray([this.valueOf()].concat(arg)));
    };
    obj.divIf = function () {
        for (var _len4 = arguments.length, arg = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            arg[_key4] = arguments[_key4];
        }

        return divIf.apply(undefined, _toConsumableArray([this.valueOf()].concat(arg)));
    };
    obj.modIf = function () {
        for (var _len5 = arguments.length, arg = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            arg[_key5] = arguments[_key5];
        }

        return modIf.apply(undefined, _toConsumableArray([this.valueOf()].concat(arg)));
    };
}
//# sourceMappingURL=index.js.map