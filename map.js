

function testMap() {
    let map = new Map();
    map.set(1,2);
    map.set(2,3);
    map.set(4,5);
    map.set(7,8);
    map.set(1,2);

    console.log('map: ', map);
    //map.delete(1);
    map.set(1,3);
    console.log('map borrado: ', map);

}

// Data structure usada en LRU Cache

testMap();