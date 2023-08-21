import { ISorter } from "./ISorter";
import { Sorter } from "./SorterClass";
export class StringCollection extends Sorter {
  collection: string;
  constructor(data: string) {
    super();
    this.collection = data;
  }
  compare(leftindex: number, rightIndex: number): boolean {
    if (
      this.collection[leftindex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  }
  swap(leftindex: number, rightIndex: number): void {
    let charArray = this.collection.split("");
    let temp = charArray[leftindex];
    charArray[leftindex] = charArray[rightIndex];
    charArray[rightIndex] = temp;
    this.collection = charArray.join("");
  }
  get length(): number {
    return this.collection.length;
  }

  print(): void {
    for (let i = 0; i < this.collection.length; i++) {
      console.log(this.collection[i], " ");
    }
  }
}
