- Both the child nodes of a node should be same
```python
if not node.left and not node.right:
	return False
if not node.left or not node.right:
	return False

#can be written as
if not node.left or not node.right:
		return node.left == node.right
```

- Write code in the top-down pattern
That is, write the for loops first instead of worrying about what all variables you will be needing along the way
