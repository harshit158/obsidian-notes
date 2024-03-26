#trie
![enter image description here](https://he-s3.s3.amazonaws.com/media/uploads/fb14630.png)

- Used for re==TRIE==val from a group of strings
- Each node can have ==max 26== branches (one for each english alphabet)

Advantages (when compared to *hash tables*):
- Finding all keys with a common prefix
- Enumerating a dataset of strings in lexicographical order

Each node has below attributes:
- Max of R links to children (R is mostly 26)
- Boolean field -> to specify if this node is the end of the key, or just a prefix
