//Number of connected components in undirected graph

 const buildAdjList = (n, edges) => {
    const adjList = Array.from({length: n}, () => [])
    console.log('adjList original: ', adjList);

    for(let edge of edges){
        let [src, dest] = edge;
        console.log('cEdge: ', edge);
        adjList[src].push(dest);
        adjList[dest].push(src);
    }
    console.log('adjList modificado: ', adjList );
    return adjList;
 }

 const bFs = (node, adjList, visited) => {
    const queue = [node];
    visited[node] = true;

    while(queue.length) {
        let curNode = queue.shift();

        for(let neighbor of adjList[curNode]){
            if(!visited[neighbor]){
                visited[neighbor = true];
                queue.push(neighbor);
            }
        }
    }
 }


 const testEdges = [[0,1], [1,2], [3,4]];
 console.log('testEdges: ', testEdges);
 const test = buildAdjList(5, testEdges);
 console.log('test: ', test);