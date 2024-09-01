/**
 * @param {string} digits
 * @return {string[]}
 */

// My initial approach
var letterCombinations = function(digits) {
    console.log('digits');
    let hash = {};
    /*
    hash['2'] = ['a','b','c'];
    hash['3'] = ['d','e','f'];
    hash['4'] = ['g', 'h', 'i'];
    hash[5] = ['j', 'k', 'l'];
    hash[6] = ['m', 'n', 'o'];
    hash[7] = ['p','q', 'r', 's'];
    hash[8] = ['t', 'u', 'v'];
    hash[9] = ['w', 'x', 'y', 'z'];
    */
    if(digits === "") return [];
    let digitsArr = digits.split('').map(Number);
    let map = digitsArr.map(digit => {
        if(digit === 2) return ['a','b','c']
        if(digit === 3) return ['d', 'e', 'f']
        if(digit === 4) return ['g', 'h', 'i'];
        if(digit === 5) return ['j', 'k', 'l'];
        if(digit === 6) return ['m', 'n', 'o'];
        if(digit === 7) return ['p','q', 'r', 's'];
        if(digit === 8) return ['t', 'u', 'v'];
        if(digit === 9) return ['w', 'x', 'y', 'z'];
    })
    //console.log(hash);
    console.log('map: ', map);
    /*let charSet = [];
    for (dig of digits) {
        console.log('dig: ', dig);
        console.log('hash[dig]: ', hash[dig]);
        let temp = hash[dig];
        console.log('temp: ', temp, typeof temp);
        charSet.concat(hash[dig]);
    }
    console.log('charset: ', charSet);
    */
    //charSet.push(n2);
    //charSet.push(n3);
    //let result = n2.flatMap(d => n3.map(v => d + v));
    let result = map.reduce((a,b)=>a.flatMap(x=>b.map(y=>x+y)),['']);
    console.log('result: ', result);
    return result;
};


/**
 * 
 * 
 * /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits==='') return []
    let result = [];
    const alpha = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    console.log('alpha: ', alpha[2]);
    
    //dfs helper
    let dfs = (i, digits, slate) => {
        //backtracking

        //base case
        if(i === digits.length){
            result.push(slate.slice().join(''));
            return;
        }

        //recursive case
        let chars = alpha[digits[i]];
        for(let char of chars) {
            slate.push(char);
            dfs(i+1, digits, slate)
            slate.pop();
        }
    }

    dfs(0, digits, []);
    return result;
};
 */