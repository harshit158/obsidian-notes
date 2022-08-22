Each data type (**collection** and **iterable**) conveys some intention behind the code. Wrong use of the data type at a wrong place can inform wrong intentions to the reader.

### Collections:
- **List:**
	- Meant for iterating over
	- Mutable: can be changed any time
	- Don't expect retrieving element from the mid
	- It might contain duplicate elements

- **String**
	- Immutable collection of characters

- **Generator**
	- Should never be indexed into
	- Each loop iteration is lazy
	- Great for infinite / computationally expensive collections
	- Used when 

- **Tuple**
	- Immutable: Dont expect it to change
	- Very rarely iterated over 

- **Set**
	- No duplicates
	- Can't rely on ordering of elements
	- Variant is: ==frozenset== , which is **Immutable**


### Iteration:
- **Comprehensions**
	- Transforms One collection -> Another collection

- **Recursion**
	- Recursion is used when the substructure of a collection is identical to the structure of a collection


### Code complexities
- Necessary complexity
- Accidental complexity