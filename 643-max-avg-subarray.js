// Input: arr
// Output: max avg subarray of length k
// sliding window pattern
// start, end, soFar(count ó sum), max(result ó average)


function maxAvgSub(nums, k) {
    let result = -Infinity;
    let soFar = 0;
    let start = 0;
    // let start = nums[0];
    // let end = nums[0];
    for(let end = 0 ; end < nums.length;  end++) {
        soFar += nums[end];
        if(end-start === k-1){
            let avg = soFar/k;
            result = Math.max(result, avg);
            soFar -= nums[start];
            start++;
        }
    }
    return result;
}


let nums = [1,12,-5,-6,50,3];
let k = 4;
let result = maxAvgSub(nums, k);
console.log(result);

// SUCCESS :)