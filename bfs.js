// BFS algorithm

function bfs(graph, start){
    // Se crea un Set que no permite duplicados para llevar registro de los nodos visitados
    //const visited = new Set([1,2,3,4,5]);
    const visited = new Set([]);

    // Se crea la cola para llevar registro de los nodos
    // Se empuja el nodo inicial donde se empieza la busqueda
    const queue = [start];

    console.log('processing queue...');
    // Se procesa la cola
    while(queue.length) {
        const node = queue.shift();
        // Procesar nodo
        console.log('node: ', node);
        //console.log('queue: ', queue);

        for(const neighbor of graph[node]){
            // console.log('Processing node: ', node, ', neighbors', graph[node]);
            // console.log('Processing neighbor: ', neighbor);
            if(!visited.has(neighbor)){
                visited.add(neighbor);
                queue.push(neighbor);
            }
            // console.log('visited after: ', visited);
            console.log('queue after: ', queue);
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
bfs(graph, 'A');