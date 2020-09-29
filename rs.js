let array =[43, 24, 12, 45, 23, 25, 56];

const selectionSort = function (arr, len) {
    
    if (len >= arr.length){
       // console.log(arr)
        return arr;
    }
    let min = len;

    for (let j = len + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
    if (min !== len) {    
    let tmp = arr[len];
    arr[len] = arr[min];
    arr[min] = tmp;
    }
    
    selectionSort(arr, len+1);
}
// console.log(selectionSort ([5, 7, 9, 4, 1, 8, 25, 3]))
// console.log(selectionSort ([46, 2, 34, 90, 56, 27]))
console.log(selectionSort (array, 0))
