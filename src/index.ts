import { Sorter } from "./SorterClass";
import { NumberCollection } from "./NumberCollectionClass";
import { StringCollection } from "./StringCollectionClass";

let collection = new StringCollection("XaaazzzBB");
console.log(collection.collection);
collection.sort();
console.log("----------------------------------");
console.log(collection.collection);

const numberColl = new NumberCollection([1000, 10, 23, 45, 1, 9]);
console.log(numberColl.collection);
numberColl.sort();
console.log(numberColl.collection);

// console.log(12345);

// const logStream = () => {
//   console.log("log streaming");
// };

// logStream();
