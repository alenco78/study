
//
//

function findDuplicate(arr) {
    let n = arr.length;
    let gSum = ((n-1)*(n)) / 2;
    let nSum = arr.reduce((acc,el) => acc + el, 0); 
    let result = nSum - gSum;
    console.log('gSum: ', gSum);
    console.log('nSum: ', nSum);
    console.log('result: ', result);
    return result;

}

//let arr = [1,3,4,2,2];
//let arr = [3,1,3,4,2];
let arr = [1,1];
let result = findDuplicate(arr);
console.log('resultT: ', result);