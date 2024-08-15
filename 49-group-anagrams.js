// Input: arr of Strings
// Group the anagrams together

// sort array of Strings
// Hacer un hash

function groupAnagrams(strs) {
    const sortedStrs = strs.map(word => word.split('').sort().join());
    const hash = {};
    console.log('strs: ', strs);

    for(let i = 0; i < strs.length ; i++) {
        console.log('hash[sortedStrs[i]]', hash[sortedStrs[i]]);
        if(!hash[sortedStrs[i]]){
            hash[sortedStrs[i]] = [strs[i]];
        } else {
            hash[sortedStrs[i]].push(strs[i]);
        }
    }
    console.log('hash: ', hash);
    return Object.values(hash);
}
let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
let result = groupAnagrams(strs);
console.log('result: ', result);