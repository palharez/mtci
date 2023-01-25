class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }

  pop() {
    const lasItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lasItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i += 1) {
      this.data[i] = this.data[i + 1];
    }

    this.pop();
  }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("You");
newArray.push("Ku");
newArray.push("Xou");
console.log(newArray);
newArray.delete(1);
console.log(newArray);
newArray.push("Vou");
newArray.push("Pou");
console.log(newArray);
newArray.pop();
console.log(newArray);
