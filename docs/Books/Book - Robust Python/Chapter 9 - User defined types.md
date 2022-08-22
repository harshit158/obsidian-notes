- **Dataclass**
```python
from dataclasses import dataclass

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```
is equivalent to
```python
@dataclass
class Person:
    name: str
    age: int

p1 = Person("John", 25)
```

dataclass decorator automatically creates the \__init__ function

- Dataclass is used to automatically define ==magic methods==
	- `str(p1)` will invoke `__str__()` automatically
	- `repr(p1)` will invoke `__repr__()`
	- `@dataclass(eq=True)` will automatically implement `__eq__` method

- `@dataclass(frozen=True)` makes the class immutable and ==it can be hashed==. It defines `__hash__` function internally.

>[!tip] dataclass vs dictionary
>Prefer dataclass over dictionary if the data is heterogenous

