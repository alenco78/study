// Given a sorted arr, unknown size

// Increment range to search by i*2
// Use binary search in range

function search() {
    let left = 0;
    let right = 0;

    while(reader.get(right) < target) {
        left = right;
        right = right * 2;
    }

    // Binary search
    while(left <= right) {
        let mid = Math.floor((left + right) / 2 );
        if(reader.get(mid) === target) return mid;
        if(reader.get(mid) <= target && target < reader.get(mid)) {
            right = mid - 1;
        } else {
            right = mid + 1;
        }
    }
    return -1;
}