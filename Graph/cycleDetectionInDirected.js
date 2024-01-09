function cycleDetectionInDirected(V, adjacencyList){
    let visitedNodes = new Set();
    let inProgressNodes = new Set();

    for(let node = 0; node < V; node++){
        if(!visitedNodes.has(node)){
            if(hasCycle(node, adjacencyList, visitedNodes, inProgressNodes))
                return true;
        }
    }
    return false;
}

function hasCycle(node, adjacencyList, visitedNodes, inProgressNodes){
    if(inProgressNodes.has(node)){
        return true;
    }
    
    if(visitedNodes.has(node)){
        return false;
    }
    
    visitedNodes.add(node);
    inProgressNodes.add(node);

    let neighbors = adjacencyList[node];

    for(let nextNode of neighbors){
        if(!visitedNodes.has(nextNode)){
            if(hasCycle(nextNode, adjacencyList, visitedNodes, inProgressNodes))
                return true;
        }
    }
    inProgressNodes.delete(node);
    return false;
}

