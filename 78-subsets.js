/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    //dfs recursive
    const dfs = (i,nums,slate) => {
        //base case
        if(i === nums.length) {
            result.push(slate.slice());
            return;
        }

        //backtacking case

        //recursive case
        //left
        dfs(i+1, nums, slate);

        //right
        slate.push(nums[i]);
        console.log('slate: ', slate);
        dfs(i+1, nums, slate);
        slate.pop();

    }
    dfs(0, nums, []);
    return result;
};

// Success (: