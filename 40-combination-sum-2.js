/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => a-b);

    //dfs recursive helper
    const dfs = (i, candidates, target, slate) => {

        //backtrack case
        if(target < 0) return;

        //base hit case
        if(target === 0) {
            result.push(slate.slice());
            return;
        }

        //recursive
        for(let j = i; j < candidates.length; j++) {
            console.log('slate: ', slate);
            if(i!==j && candidates[j]===candidates[j-1]) continue;
            slate.push(candidates[j]);
            dfs(j+1, candidates, target-candidates[j], slate); // porq j+1 diferente de j en 39 combination sum1?
            slate.pop();
        }

    }

    dfs(0, candidates, target, []);
    return result;
};
// success (: