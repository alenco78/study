/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 39. Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 */
var combinationSum = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => a-b);

    // dfs recursive helper
    const dfs = (i, candidadates, target, slate) => {
        //backtracking case // to prune branch
        if(target<0) return;

        //base case // result achieved
        if(target === 0) {
            result.push(slate.slice());
            return;
        } 

        //dfs recursive case // recursived case
        for(let j = i; j<candidates.length; j++){ 
            console.log('slate: ', slate);
            slate.push(candidates[j]);
            dfs(j, candidates, target-candidates[j], slate);
            slate.pop();
        }
    }

    dfs(0, candidates, target, []);
    return result;
};

// Success (: