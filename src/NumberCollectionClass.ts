import { ISorter } from "./ISorter";
import { Sorter } from "./SorterClass";
export class NumberCollection extends Sorter {
  collection: number[];
  constructor(collection: number[]) {
    super();
    this.collection = collection;
  }

  compare(leftindex: number, rightIndex: number): boolean {
    if (this.collection[leftindex] > this.collection[rightIndex]) {
      return true;
    } else {
      return false;
    }
  }

  swap(leftindex: number, rightIndex: number): void {
    let temp = this.collection[leftindex];
    this.collection[leftindex] = this.collection[rightIndex];
    this.collection[rightIndex] = temp;
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
