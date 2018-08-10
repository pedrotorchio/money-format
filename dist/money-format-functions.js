"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function readTransform(precision, value) {
    // Number -> Formatted String
    value = value.toFixed(precision);
    return value;
}
exports.readTransform = readTransform;
function writeTransform(precision, value) {
    // Numeric String -> 'Precise' Number
    value = value.replace(/[.,]/, '');
    if (isNaN(value) || value == false)
        value = '0';
    value = parseInt(value);
    value = value / Math.pow(10, precision);
    return value;
}
exports.writeTransform = writeTransform;
