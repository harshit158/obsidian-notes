## Algorithm (for graph traversal):
1. - ==Pick== any node
	- ==visit== the adjacent ==unvisited== vertex
	-  ==mark== it as visited
	-  ==insert== it in a queue
2.   If no adjacent vertices left, remove the first vertex from the queue
4.   Repeat 1 and 2 until queue is empty or desired node is found

![[Pasted image 20210524203020.png]]


- Instead of queue here, we can ==use Deque== ([[Tips#^47eb3b]]) which will be more efficient 

**Remember**
- 

## Complexity


## Ways of tracking nodes at different levels

^4bf035

(in increasing order of efficiency)
Ref: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/solution/

1. Adding ==(node, level)== into the queue instead of just node. The children are added at (node, level+1)
![[Pasted image 20210530140204.png]]

2. Add ==NULL== at the end of each level. 
![[Pasted image 20210530140346.png]]
 ^e7d4f2
3. Recording size of queue and use nested for loop
![[Pasted image 20210530140451.png]]
Each for loop ends once it has processed all the nodes at a particular level ^3cd2de