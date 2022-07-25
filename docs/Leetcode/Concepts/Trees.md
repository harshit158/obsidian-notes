How to solve tree problems recursively on [Leetcode](https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/534/)

**Binary Tree Traversals**:

==Inorder Traversal (Iterative)== 
```python

def inorderIterative(root):
    # create an empty stack
    stack = deque()
    # start from the root node (set current node to the root node)
    curr = root
    
    # if the current node is None and the stack is also empty, we are done
    while stack or curr:
        # if the current node exists, push it into the stack (defer it)
        # and move to its left child
        if curr:
            stack.append(curr)
            curr = curr.left
        else:
            # if the current node is None, pop an element from the stack,
            # print it, and finally set the current node to its right child
            curr = stack.pop()
            print(curr.data, end=' ')
            curr = curr.right
```


==Preorder Traversal== ^64dfb6
```python
def preorderIterative(root):
    # return if the tree is empty
    if root is None:
        return
        
    # create an empty stack and push the root node
    stack = deque()
    stack.append(root)
    
    # loop till stack is empty
    while stack:
        # pop a node from the stack and print it
        curr = stack.pop()
        print(curr.data, end=' ')
        # push the right child of the popped node into the stack
        if curr.right:
            stack.append(curr.right)
        # push the left child of the popped node into the stack
        if curr.left:
            stack.append(curr.left)
    # the right child must be pushed first so that the left child
    # is processed first (LIFO order)
```

[Recursive](https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/#:~:text=Practice%20this%20problem-,Recursive%20Implementation,-As%20we%20can)



==Postorder Traversal==
```python
def postorderIterative(root):
    # return if the tree is empty
    if root is None:
        return
    
    # create an empty stack and push the root node
    stack = deque()
    stack.append(root)
    
    # create another stack to store postorder traversal
    out = deque()
    
    # loop till stack is empty
    while stack:
        # pop a node from the stack and push the data into the output stack
        curr = stack.pop()
        out.append(curr.data)
        # push the left and right child of the popped node into the stack
        if curr.left:
            stack.append(curr.left)
        if curr.right:
            stack.append(curr.right)
    
    # print postorder traversal
    while out:
        print(out.pop(), end=' ')
```
