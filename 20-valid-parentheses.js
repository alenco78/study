/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let i = 0;
    let len = s.length;

    while(i<len) {
        let curPar = s[i];
        stack.push(curPar);
        let open = stack[stack.length-2];
        let close = stack[stack.length-1];
        let parens = open + close;
        console.log('parens: ', parens);
        console.log('stack: ', stack);
        console.log('i: ', i);
        if('() [] {}'.includes(parens)) {
            stack.pop();
            stack.pop();
        }
        i++;
    }
    return stack.length === 0;
};