// Swap 2 pointers until there is no more swaps
// After the 1st scan, the last number is sorted
// O(n*n)

function bubbleSort(nums) {
    let swap = true;    // in case arr is already sorted

    while(swap) {
        swap = false;

        for(let i=0 ; i < nums.length ; i++) {
            let j = i+1;
            console.log([nums[i], nums[j]]);

            if(nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                swap = true;
            }
        }
    }
    console.log('sorted: ', nums);
}

let nums = [5,2,3,1];
bubbleSort(nums);

// let hash = {};
// hash['smth'] = 14;
// hash[21] = 14;

// console.log('hash: ', hash);