// Two sum

// nlogn - indices en los extremos del arreglo ordenado ascendente

// usar hash: value: indice en el array 
// potentialKey = target - nums[i]
// if (hash[potKey] && hash[potKey !=== i]) { return hash[potKey]}


function twoSum(nums, target) {
    let hash = {};

    for(let i=0; i < nums.length; i++) {
        let val = nums[i]
        hash[val] = i;
    }
    
    console.log('hash', hash);
    for(let i=0; i < nums.length; i++) {
        let potKey = target - nums[i];
        if( hash[potKey] && hash[potKey]!==i) return [i, hash[potKey]];
    }
}

let nums = [2,7,11,15]
let target = 18;
let result = twoSum(nums, target);
console.log('result: ', result);


// let hash = {};
// hash['smth'] = 14;
// hash[21] = 14;

// console.log('hash: ', hash);

// SUCCESS :)