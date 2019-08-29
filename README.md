# roadmap
An application to help organize a personal technology roadmap

## install

## data files
There are 3 types of files:
    1. roadmap_data.json
        this has all the data about each topic. The file can be organized in a tree structure if needed.
    2. user_[name].json
        this is a file per user. It will add attribute to the nodes from the roadmap_data.json file.
        this way we can change parts of the attribute to follow updates in personal roadmap
    3. tree_[name].json
        this is a file per view. you can create a new tree view per domain needed using the same data that is in the roadmap_data file

## roadmap_data         

### attributes
      id: used as a handle to reference node in all files
      name: to be displayed in tree node
      tooltip: to be displayed upon mouse hover
      description: a more detailed information about node, can be shown from context menu on node
      date: when node was updated with last information
      relevance: how important is this node for the roadmap, (int, size of circle will be changed)
      tags: for future use 
      
### user attributes      
      state: state of roadmap per node (start, in_progress, done)
      knowledge_level: how well do i know the information for this node (low, med, high)

### tree attributes
      color: color of line from node to parent