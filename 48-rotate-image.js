/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    console.log('Matrix: ', matrix);
    for(let row = 0 ; row < matrix.length; row++) {
        for(let col = row; col < matrix[0].length; col++) {
            //console.log('1): ', [matrix[row][col], matrix[col][row]]);
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
        }
    }
    //console.log('Matrix: ', matrix);
    for(row of matrix) {
        row.reverse();
    }
    console.log('reversed: ', matrix);
};