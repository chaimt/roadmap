function loadDataNodes(source) {
    let data = new Array()
    if (source != null){
        source.forEach(i => {
            if (i.children != null){
                sub = loadDataNodes(i.children);
                if (sub.length>0){
                    data.push(sub);
                }
            }
            data.push(i);
        });
    }
    return data.flat(1);
}

function getUserStateColor(d, def) {
    let dataNode = d.data;
    if (dataNode != null) {
        if (dataNode.hasOwnProperty("state")) {
            if (dataNode.state === "done")
                return "green";
            else if (dataNode.state === "start")
                return "Aqua";
            return "black";
        }
    }
    return def;
}

function mergeUserNodesData(roadmap, user) {
    for (let [id, roadmapItem] of roadmap) {
        let userItem = user.get(id);
        mergeUserNodeData(roadmapItem, userItem);
    }
}

function mergeUserNodeData(roadmap, user) {
    if (user != null) {
        let key;
        for (key in user) {
            if (user.hasOwnProperty(key)) {
                roadmap[key] = user[key];
            }
        }
    }
}

