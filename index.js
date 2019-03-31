
function findMinAndRemoveSorted(array) {
  let minIdx = 0
  let min = array[0]
  for(let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      minIdx = i
      min = array[i]
    }
  }
  array.splice(minIdx, 1)
  return min
}

function merge(firstHalf, secondHalf){
  let sorted = []
  while(firstHalf.length !== 0 && secondHalf.length !== 0) {
    if (firstHalf[0] < secondHalf[0]) {
      let currentMin = findMinAndRemoveSorted(firstHalf)
      sorted.push(currentMin)
    } else {
      let currentMin = findMinAndRemoveSorted(secondHalf)
      sorted.push(currentMin)
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
  let midPoint = array.length/2
  let firstHalf = array.slice(0, midPoint)
  let secondHalf = array.slice(midPoint, array.length)
  
  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}