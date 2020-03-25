export class NumbersCollection {
  constructor(public data: number[]) {}

  compare(left: number, right: number): boolean {
    return this.data[left] > this.data[right];
  }

  swap(left: number, right: number): void {
    const leftVal = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = leftVal;
  }

  get length(): number { // don't need to call as function with ()
    return this.data.length;
  }
}
