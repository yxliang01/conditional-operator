export {addIf, subIf, multIf, divIf, modIf, addChainMember};

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
    obj.addIf = function (...arg) { return addIf(...[this.valueOf()].concat(arg)) };
    obj.subIf = function (...arg) { return subIf(...[this.valueOf()].concat(arg)) };
    obj.multIf = function (...arg) { return multIf(...[this.valueOf()].concat(arg)) };
    obj.divIf = function (...arg) { return divIf(...[this.valueOf()].concat(arg)) };
    obj.modIf = function (...arg) { return modIf(...[this.valueOf()].concat(arg)) };
}