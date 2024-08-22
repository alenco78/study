/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const zeros = [];

    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++){
            if(matrix[r][c]===0){
                zeros.push([r,c]);
            }
        }
    }
    console.log('zeros: ', zeros);
    changeZeros(matrix, zeros);
};

function changeZeros(matrix, zeros) {
    for(position of zeros) {
        console.log('position: ', position);
        for(let i = 0; i < matrix.length ; i++) {
            matrix[i][position[1]] = 0;
        }
        for(let i = 0; i < matrix[0].length ; i++) {
            matrix[position[0]][i] = 0;
        }
    }
    console.log('matrix: ', matrix);
}

// Success (: