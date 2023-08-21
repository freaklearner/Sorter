"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollectionClass_1 = require("./NumberCollectionClass");
const StringCollectionClass_1 = require("./StringCollectionClass");
let collection = new StringCollectionClass_1.StringCollection("XaaazzzBB");
console.log(collection.collection);
collection.sort();
console.log("----------------------------------");
console.log(collection.collection);
const numberColl = new NumberCollectionClass_1.NumberCollection([1000, 10, 23, 45, 1, 9]);
console.log(numberColl.collection);
numberColl.sort();
console.log(numberColl.collection);
// console.log(12345);
// const logStream = () => {
//   console.log("log streaming");
// };
// logStream();
