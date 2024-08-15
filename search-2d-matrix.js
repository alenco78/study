// 

// Search a value in mxn matrix
// Properties: Integers in each row are sorted asc
//  The 1st integer of each row is greater than the last row

function search(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = (rows * cols) - 1;
    console.log('right: ', right);

    while(left <= right ) {
        let mid = Math.floor(left + (right-left)/ 2);
        let midVal = matrix[Math.floor(right/cols)][right%cols];

        if(midVal === target) return true;
        if(target < midVal) right = mid-1;
        else left = mid + 1;
    }
    return false;
}

let matrix = [
    [ 1, 3, 5, 7],
    [10,11,16,20],
    [23,30,34,60]
]

let result = search(matrix, 11);
console.log('result: ', result);