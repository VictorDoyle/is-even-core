"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isEven;
function isEven(n) {
    const num = typeof n === "string" ? parseFloat(n) : n;
    if (isNaN(num) || !Number.isInteger(num)) {
        throw new Error(`Invalid input: '${n}' is not a valid integer or numeric string.`);
    }
    return num % 2 === 0;
}
