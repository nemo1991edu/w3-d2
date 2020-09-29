


let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
// console.log(selectionSort ([5, 7, 9, 4, 1, 8, 25, 3]))
// console.log(selectionSort ([46, 2, 34, 90, 56, 27]))
console.log(selectionSort ([5, 7, 98, 76]))// let nums = [5, 7, 9, 4, 1, 8, 25, 3];// let otherNums = [46, 2, 34, 90, 56, 27];//let finalTest = [5, 7, 98, 36, 47, 45, 5, 2] (edited)