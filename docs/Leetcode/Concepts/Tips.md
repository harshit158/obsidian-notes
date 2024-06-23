### Deque Vs List.pop(0)

==List== is expensive:
list.pop(0) -> ==O(n)==
list.pop() -> ==O(1)== 

**Deque** ^47eb3b
#deque
- Double Ended Queue: Generalization of stack and queue, hence can be used for implementing both
- Implemented using ==Doubly Linked List==
- Both popping and appending are ==O(1)== since operations are at the ends (and not in the middle)
	- *Removing* elements : pop() and ==popleft()==
	- *Inserting* elements : append() and ==appendleft()==
- Complexity of Random access is ==O(n)== just like any other LL.
	
**List**
- In contrast to LL, popping and appending are ==O(n)== but random access is ==O(1)==

**Queue**
- What about this ? queue.pop(0) vs deque.popleft() ? #todo 



## Subarrays
- Whenever a problem description talks about subarrays, you should figure out if ==sliding window== is a good option by analyzing the problem description
- Next possibility is ==prefix sum==
- Eg: [[560. Subarray Sum Equals K]]