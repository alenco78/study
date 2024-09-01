/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    //dfs helper
    let result = [];

    let dfs = (i, s, slate) => {

        //backtracking case        

        //dfs base case
        if(i === s.length) {
            result.push(slate.join(''));
            return;
        }

        //dfs recursive case
        let char = s[i];
        if(!Number.isInteger(parseInt(char))) {
            //uppercase
            slate.push(char.toUpperCase());
            dfs(i+1, s, slate);
            slate.pop();

            //lowercase
            slate.push(char.toLowerCase());
            dfs(i+1, s, slate);
            slate.pop();
        } else {
            slate.push(char);
            dfs(i+1, s, slate);
            slate.pop();
        }

        /*
        for(char of s) {
            if(Number(char)) {
                slate.push(char);
                dfs(i+1, s, slate);
                slate.pop();
            } else {
                slate.push(char.toUpperCase());
                dfs(i+1, s, slate);
                slate.pop();
            }
        }
        */
    }

    dfs(0, s, []);
    console.log('result: ', result);
    return result;
};

//Sucess (: