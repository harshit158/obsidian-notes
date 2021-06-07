#topological-sort 

- If G is DAG => it has ==atleast== one Topological ordering
- If G has topological ordering => DAG

**Kahn's algorithm** -> Finding topological ordering in Linear time
![[Pasted image 20210528155807.png]]

1. Insert those nodes that have no incoming edges into a queue
2. Remove these nodes and delete all the outgoing edges from this node
3. Repeat 1 and 2 until we find no more nodes with 0 incoming edges
4. Termination condition:
	- If still some edges left, there is cycle
	- Otherwise we get the topological sort