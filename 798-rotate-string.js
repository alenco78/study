/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    console.log('s: ', s);
    if(s.length !== goal.length) return false
    if(s.length === 0 && goal.length === 0) return false
    s = s+s;
    console.log('s2: ', s);
    if(s.includes(goal)) return true;
    return false;
};

// Success (: