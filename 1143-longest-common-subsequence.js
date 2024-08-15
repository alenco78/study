// Input 2 strings: text1, text2
// Output Return the length of the longest common subsequence

// Usar dynamic programming tabling

// if(text1[i-1] === text2[j-1])
// table[i][j] = table[i-1][j-1]+text1[i-1]
// else table [i][j] = Max(table[i-1], table[j-1])

function longestCommonSub(text1, text2) {
    console.log('text1: ', text1);
    console.log('text2: ', text2);
    const table = Array.from({length: text1.length + 1}, () => new Array(text2.length+1).fill('') );
    console.log('table: ', table);
    
    for(let i = 1; i < table.length ; i++) {
        for(let j = 1; j < table[i].length; j++) {
            if(text1[i-1] === text2[j-1]) {
                table[i][j] = table[i-1][j-1] + text1[i-1];
            } else {
                let aboveChar = table[i-1][j];
                let leftChar = table[i][j-1]
                table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar;
            }
        }
    }
    console.log('tableR: ', table)
    return table[table.length - 1][table[0].length - 1].length;
}

let t1 = 'abcde';
let t2 = 'ace';

let result = longestCommonSub(t1, t2);
console.log('result: ', result);