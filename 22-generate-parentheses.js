/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    //dfs recursive helper
    const dfs = (i, n, slate, oCount, cCount) => {
        
        // backtracking case
        if(oCount > n) return
        if(cCount > oCount) return

        // base hit search
        if(i === n*2) {
            /*
            Brute Force Approach
            if(isValid(slate.join(''))){
                result.push(slate.join(''));
            }
            */
            result.push(slate.join(''));
            return
        }

        // recursive case
        // add open (
        console.log('slate: ', slate);
        slate.push('(');
        dfs(i+1, n, slate, oCount+1, cCount);
        slate.pop();

        // add close )
        slate.push(')');
        dfs(i+1, n, slate, oCount, cCount+1);
        slate.pop();
    }

    dfs(0, n, [], 0 ,0);
    return result;

};

const isValid = (str) => {
    const stack = [];
    let i = 0;
    let len = str.length;

    while(i<len) {
        let curParen = str[i];
        stack.push(curParen);
        let open = stack[stack.length-2];
        let close = stack[stack.length-1];

        if(open + close === '()') {
            stack.pop();
            stack.pop();
        }
        i++;
    }
    return stack.length === 0;
}

 // Success (: