// bFs 2

function bFs(graph, start) {
    console.log('graph: ', graph);
    console.log('start: ', start);

    let visited = new Set();
    let queue = [start];
    let result = [];

    while (queue.length) {
        const node = queue.shift();
        console.log('node: ', node);
        if(!visited.has(node)) {
            visited.add(node);
            result.push(node);
            for(const neighbor of graph[node]) {
                queue.push(neighbor);
            }
            console.log('queue: ', queue);
        }
    }
}

const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B', 'F'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['C', 'E']
};
const start = 'A';

bFs(graph, start);