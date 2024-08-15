function bfs(start) {
    const result= [];
    const queue = start;
    while (queue.length) {
        const current = queue.shift();
        if(current === null) continue;
        result.push(current.value);
        for (const child of current.children){
            queue.push(child);
        }
    }
    return result;
}