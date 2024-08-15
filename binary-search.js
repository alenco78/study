function binarySearch(arr, target) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(target === arr[midIdx]) return midIdx;
        if(target < arr[midIdx]) {
            rightIdx = midIdx - 1;
        } else {
            leftIdx = midIdx + 1;
        }
    }
    return -1;
}


let arr = [-5,2,4,6,7];
let target = 7;
let result = binarySearch(arr, target);
console.log('result: ', result);