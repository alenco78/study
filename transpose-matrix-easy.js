//

//

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    console.log('rows: ', rows);
    console.log('cols: ', cols);
    let result = Array.from({ length: cols }, () => Array(rows).fill(0));
    console.log(result);

    for(let row = 0; row < rows; row++) {
        for(let col=0; col < cols; col++) {
            result[col][row] = matrix[row][col];
            console.log('result: ', result);
        } 
    }
}

// let matrix = [
//     [1, 2],
//     [4, 5],
//     [7, 8]
// ];

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

let matrix = [
    [1, 2 ,3],
    [4, 5, 6]
]
transposeMatrix(matrix);


//SUCCESS :)