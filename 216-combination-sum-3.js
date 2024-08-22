/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    let result = [];
    let nums = [1,2,3,4,5,6,7,8,9];

    //dfs recursive helper
    const dfs = (i, nums, k, n, slate) => {

        //backtrack
        if(n<0) return;

        //base hit case
        if(slate.length === k){
            if(n===0){
                result.push(slate.slice());
            }
            return;
        }

        //recursive case
        for(let j=i ; j<nums.length; j++) {
            console.log('slate: ', slate);
            slate.push(nums[j]);
            dfs(j+1, nums, k, n-nums[j], slate);
            slate.pop();
        }

    }

    dfs(0, nums, k, n, []);
    return result;
};

// Success (: