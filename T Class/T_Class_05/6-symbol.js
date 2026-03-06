// JS specification says Object keys ==> either string or symbol.....

//---> A symbol is a "primitive unique value" with an optional description.

let baby = Symbol("mai ka ladle");

//----> Symbols are always unique, even the desc is same

// let yntp = Symbol("ak"); // regular symbol
// let rehman = Symbol("ak"); // regular symbol
// console.log(Symbol("ak") === Symbol("ak")); // false

//---------------------------------------------------------------------------------------------------------------------
// Use Case
// Hidden Properties, skipped by for..in loop

// 2nd Use Case
// Global Symbol -- they exists in global symbol registry
let org = Symbol.for("ChaiCode");

let company = Symbol.for("ChaiCode");

console.log(org === company); // true
console.log(Symbol.keyFor(org)); // ChaiCode
//---------------------------------------------------------------------------------------------------------------------

// System Symbols
// Symbol.iterator
// Symbol.toPrimitive

// Technically, symbols are not 100% hidden.
// There is a built-in method Object.getOwnPropertySymbols(obj)