/**
 * @param {number[]} nums
 * @return {number[]}
 */
// When [1,n] value points to next pointer of arr
var findDuplicates = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length ; i++) {
        let idx = Math.abs(nums[i]) - 1; // to map [1,n] to index of arr
        let val = nums[idx];
        if(val < 0){
            result.push(Math.abs(nums[i]));
        } else {
            nums[idx] = -nums[idx];
        }
    }
    return result;
};

// Success (: