// Class example

class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key) {
        if(this.map.has(key)) {
            let value = this.map.get(key);
            console.log('value: ', value);
        }
    }

    put(key, value) {
        this.map.set(key, value);
        console.log('updated');
    }
}

let test = new LRUCache();
console.log('test: ', test);

let test2 = new LRUCache(200);
console.log('test2: ', test2);
