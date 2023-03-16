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