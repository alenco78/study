//Given an array nums contains n distinct numbers [0,n]
//return the only number in the range that is missing from the arr

//i.e [3,0,1];  n=3; expected out: 2; falta el 2
//sort es nlogn

//yo estaba bien :)

var missingNumber = function (nums) {
    const gSum = (nums.length * (nums.length+1)) / 2;
    console.log('gSum: ', gSum);

    //const nSum = gSum - nums.length;
    const nSum = nums.reduce((acc,el) => acc+el, 0)
    console.log('nSum: ', nSum);

    console.log('resultado: ', gSum-nSum);
}

missingNumber([0,1]);
missingNumber([3,0,1]);