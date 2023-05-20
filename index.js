// Run by typing: 'node index.js' in your terminal

function mergeSort(array, prev, next) {
  if (next === array.length) return array;
  if (array[prev] > array[next]) {
    let num = array[prev];
    array[prev] = array[next];
    array[next] = num;
    return mergeSort(array, prev-1, next-1);
  }
  return mergeSort(array, prev+1, next+1);
}

console.log(mergeSort([9, 4, 20, 55, 7, 2, 2, 8], 0, 1));
