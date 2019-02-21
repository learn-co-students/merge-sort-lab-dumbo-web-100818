function findMinAndRemoveSorted(arr) {
  return arr.shift();
}

function merge(arr1, arr2) {
  let arr = [];
  while (arr1.length !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) {
      arr.push(arr1.shift())
    } else {
      arr.push(arr2.shift())
    }
  }
  return arr.concat(arr1).concat(arr2);
}

function mergeSort(arr) {
  let mid = arr.length/2
  let firstHalf = arr.slice(0, mid)
  let secondHalf = arr.slice(mid, arr.length)
  if (arr.length < 2) {
    return arr
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
