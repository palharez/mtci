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

    if (!this.data[hashedKey]) {
      this.data[hashedKey] = [];
      this.data[hashedKey].push([key, value]);
    } else {
      this.data[hashedKey].push([key, value]);
    }
  }

  get(key) {
    const hashedKey = this._hash(key);
    const currentBucket = this.data[hashedKey];

    if (currentBucket) {
      for (let [bucketKey, value] of currentBucket) {
        if (bucketKey == key) {
          return value;
        }
      }
    } else {
      return undefined;
    }
  }

  keys() {
    const keysArray = [];

    for (let bucket of this.data) {
      if (bucket) {
        for (let [key, value] of bucket) {
          keysArray.push(key);
        }
      }
    }

    return keysArray;
  }

  values() {
    const valueArray = [];

    for (let bucket of this.data) {
      if (bucket) {
        for (let [key, value] of bucket) {
          valueArray.push(value);
        }
      }
    }

    return valueArray;
  }
}

const myHashTable = new HashTable(500);

myHashTable.set(`grapes`, 10000);
myHashTable.set(`apples`, 500);
myHashTable.set(`oranges`, 500);

console.log(myHashTable.get(`grapes`));
console.log(myHashTable.get(`apples`));
console.log(myHashTable.keys());
console.log(myHashTable.values());
