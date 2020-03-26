export class CharactersCollection {
  constructor(public data: string) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split('');
    
    const leftVal = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = leftVal;

    this.data = chars.join('');
  }

  get length(): number {
    // don't need to call as function with ()
    return this.data.length;
  }
}
