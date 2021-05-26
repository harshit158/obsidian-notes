## Algorithm:
1. - ==Pick== any node
	- ==visit== the adjacent ==unvisited== vertex
	-  ==mark== it as visited
	-  ==insert== it in a queue
2.   If no adjacent vertices left, remove the first vertex from the queue
4.   Repeat 1 and 2 until queue is empty or desired node is found

![[Pasted image 20210524203020.png]]


- Instead of queue here, we can ==use Deque== ([[Tips#^47eb3b]]) which will be more efficient 


## Complexity
