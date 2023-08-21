"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const SorterClass_1 = require("./SorterClass");
class StringCollection extends SorterClass_1.Sorter {
    constructor(data) {
        super();
        this.collection = data;
    }
    compare(leftindex, rightIndex) {
        if (this.collection[leftindex].toLowerCase() >
            this.collection[rightIndex].toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    swap(leftindex, rightIndex) {
        let charArray = this.collection.split("");
        let temp = charArray[leftindex];
        charArray[leftindex] = charArray[rightIndex];
        charArray[rightIndex] = temp;
        this.collection = charArray.join("");
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
exports.StringCollection = StringCollection;
