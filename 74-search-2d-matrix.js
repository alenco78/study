/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0;
    let right = rows * cols - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = matrix[Math.floor(mid/cols)][mid%cols];
        console.log('mid: ', mid, 'midVal: ', midVal);

        if(midVal === target) return true;
        if(target < midVal) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};

// Success (: