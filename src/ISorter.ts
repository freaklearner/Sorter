export interface ISorter {
  compare(leftindex: number, rightIndex: number): boolean;
  swap(leftindex: number, rightIndex: number): void;
  get length(): number;
  print(): void;
}
