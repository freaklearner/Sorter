"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const SorterClass_1 = require("./SorterClass");
class NumberCollection extends SorterClass_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
    }
    compare(leftindex, rightIndex) {
        if (this.collection[leftindex] > this.collection[rightIndex]) {
            return true;
        }
        else {
            return false;
        }
    }
    swap(leftindex, rightIndex) {
        let temp = this.collection[leftindex];
        this.collection[leftindex] = this.collection[rightIndex];
        this.collection[rightIndex] = temp;
    }
    get length() {
        return this.collection.length;
    }
    print() {
        for (let i = 0; i < this.collection.length; i++) {
            console.log(this.collection[i], " ");
        }
    }
}
exports.NumberCollection = NumberCollection;
