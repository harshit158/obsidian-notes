- **Classes**
	- Classes help in maintaining Invariants
	- ==Invariants== is a property of an entity that remains unchanged throughout life of object
	- Invariants convey **immutable** properties of objects
	- Put **ASSERT** statements inside `__init__` to check if Invariants are maintained
		- Otherwise, these checks need to be done every time an object is created
	- Otherwise throw Assertion Errors

- If Invariant is broken, either:
	- Throw exception
	- Transform the data to satisfy the invariants

- **Communicating Invariants**
	- For Consumers of class
		- Write in the docstring of class
	- For future maintainers
		- Write ==Unit tests== so that if a developer makes some changes to the constraints, it gets detected via failed tests