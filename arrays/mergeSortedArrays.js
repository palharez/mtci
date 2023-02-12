function mergeSortedArrays(arr, arr2) {
  /**
   * O(n+m)
   */

  const resp = [];

  while (arr.length || arr2.length) {
    if (!arr.length) {
      resp.push(arr2.shift());
    }

    else if (!arr2.length) {
      resp.push(arr.shift());
    }

    else if (arr[0] < arr2[0]) {
      resp.push(arr.shift());
    }

    else {
      resp.push(arr2.shift());
    }
  }

  return resp;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));