#union-find

Ref:
Summary: https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3844/
Full optimized code: https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/

What is a ==Disjoint-Set== ?
Group of sets where no item can be in more than one set

---
**Used for:**
1. **detecting cycle in a graph**
	- In case of graph, if there is ==no merge== that happened for a particular edge, it means there is a cycle [[261. Graph Valid Tree]]
2. **checking if two nodes are connected**
3. **finding the number of connected components**
	- [[323. Number of Connected Components in an Undirected Graph]]
	- [[261. Graph Valid Tree]]
---

### Two Parts:
1. ==Find() :== 
Determine which subset a particular element is in. Finds the root node of a given vertex
Used for determining if two elements are in the same subset.
An item from this set acts as the representative of the set.

2. ==Union() :==
Join two subsets into a single subset and makes their root nodes same
Representative of one set becomes representative of other set.

---
### Implementation
- Each set is represented by a tree data
- Each node holds a reference to its parent
- Representative of each set is root of that set's tree
![Disjoint-set data structure|500](https://blog.cloudapps.io/images/lectures/disjoint_set.png)
Here 0, 5 and 6 are leaders of their respective sets

---
### Optimizations
Run time of naive implementation is ==O(N)==, similar to linked list

1. ==Path Compression==  -> Implemented for ==Find== function
Connect all the nodes in the path directly to the node
Ref: [Path Compression](https://www.youtube.com/watch?v=VHRhJWacxis)
![[Pasted image 20210625170445.png|500]]

Naive Implementation
```python
def find(x):
	while parent[x] != x:
		x = parent[x]
	return x
```

Optimized implementation (flattening)
```python
def find(x):
	if parent[x]!=x:
		parent[x] = find(parent[x])
	return parent[x]
```

2. ==Union by Rank== -> Implemented for ==Union== function
Always attach smaller tree to the root of the larger tree. 

![Union-find data structure (disjoint set data structure) | Programming,  algorithms and data structures|500](https://algocoding.files.wordpress.com/2014/09/uf4_union_by_rank.png)

```python
def union(self, x, y):
	rootX = self.find(x)
	rootY = self.find(y)
	if rootX != rootY:
		if self.rank[rootX] > self.rank[rootY]:
			self.root[rootY] = rootX
		elif self.rank[rootX] < self.rank[rootY]:
			self.root[rootX] = rootY
		else:
			self.root[rootY] = rootX
			self.rank[rootX] += 1
```


### Complexity
#todo 