#concept 

**Min Heap**: Root value ==**<=**== Children's value
**Max Heap**: Root value ==**>=**== Children's value

![[Pasted image 20210520014513.png]]

## Max Heap Construction
**Step 1** − Create a new node at the end of heap.
**Step 2** − Assign new value to the node.
**Step 3** − Compare the value of this child node with its parent.
**Step 4** − If value of parent is less than child, then swap them.
**Step 5** − Repeat step 3 & 4 until Heap property holds.

![Max Heap Animated Example](https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_animation.gif)

## Max Heap Deletion
**Step 1** − Remove root node.
**Step 2** − Move the last element of last level to root.
**Step 3** − Compare the value of this child node with its parent.
**Step 4** − If value of parent is less than child, then swap them.
**Step 5** − Repeat step 3 & 4 until Heap property holds.
Thsi is als 

![Max Heap Deletion Animated Example](https://www.tutorialspoint.com/data_structures_algorithms/images/max_heap_deletion_animation.gif)

### Usage in Python
Ref: https://www.tutorialspoint.com/heap-queue-or-heapq-in-python



```python
import heapq
nums = [1,2,3,8,4,3,9]

heapq.heapify(nums) 		
heapq.heappush(nums, 4)
heapq.heappop(nums)
```

- **heapq** module implements ==MIN Heap==
	- To use MAX heap, multiply each value by -1 ^cb18ba
- Smallest element is at array[0]
- **heapify** -> ==smallest== element gets brought to the first position, but rest of the array ==need not be sorted==.
- **heapop** -> returns ==smallest element== and ==heapifies== automatically
- **heapush** -> inserts new element and ==heapifies== automatically


### Complexity
| Operation                 | Complexity | Intuition                                                                                                                              |
|:------------------------- |:----------:|:-------------------------------------------------------------------------------------------------------------------------------------- |
| Heapifying ==an element== |  O(logn)   | In the worst case, the element travels from root to all the way to leaf, which is the height of the tree <br> ==percolates DOWN==      |
| Deleting (root)           |  O(logn)   | Once the last leaf node takes the value of root, it needs to be heapified.  <br> ==percolates DOWN==                                   |
| Inserting an element      |  O(logn)   | In the worst case, the new element has to travel from leaf to root before settling down <br> height of the tree <br> ==percolates UP== |
| Heapifying ==the array==  |    O(n)    | How? #todo Hint: This is different from heapifying all the elements one by one. Instead here, we are talking about heapifying everything at once.                                                                                                                           |


### Breaking tie between same frequencies:
-> Add a tuple of (freq, second_item)
-> If there is a tie between freq of multiple items, it uses second_item to break the tie

```python
import heapq

heap = []

heapq.heappush(heap, (5, 'apple'))
heapq.heappush(heap, (2, 'banana'))
heapq.heappush(heap, (3, 'cherry'))
heapq.heappush(heap, (2, 'avocado'))

print(heap)

```

output
```python
[(2, 'avocado'), (2, 'banana'), (3, 'cherry'), (5, 'apple')]
```

TODO: Check the order of inserted values