- Res when passed to recursive function gets updated without returning

```python
class Solution:
    def dfs(self, node, adj, res, visited):
        res.append(node)
        visited.add(node)
        for neigh in adj[node]:
            if neigh not in visited:
                self.dfs(neigh, adj, res, visited)
        
        
    #Function to return a list containing the DFS traversal of the graph.
    def dfsOfGraph(self, V, adj):
        # code here
        
        res = []
        visited = set()
        self.dfs(0, adj, res, visited)
        
        return res
```