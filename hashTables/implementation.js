class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const hashedKey = this._hash(key);

    this.data[hashedKey] = value;
  }

  get(key) {
    const hashedKey = this._hash(key);

    return this.data[hashedKey];
  }
}

const myHashTable = new HashTable(50);

myHashTable.set(`grapes`, 10000);
myHashTable.set(`grocery`, 500);

console.log(myHashTable.get(`grapes`));
console.log(myHashTable.get(`grocery`));
