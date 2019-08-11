function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(arr1, arr2){
  let sorted = []

  while(arr1.length != 0 && arr2.length != 0){
    if(arr1[0] < arr2[0]){
      sorted.push(findMinAndRemoveSorted(arr1))
    } else {
      sorted.push(findMinAndRemoveSorted(arr2))
    }
  }
  return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr){
  let midPoint = arr.length / 2
  let firstHalf = arr.slice(0, midPoint)
  let secondHalf = arr.slice(midPoint,arr.length)
  let sorted

  if(arr.length < 2){
    return arr
  }else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }

  return sorted

}
