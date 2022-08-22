- Python is ==Dynamically Typed== language : Types aren't known until runtime
  Eg: C/C++ is ==Statically Typed== language

- ==Duck Typing== 
	- Concept related to Dynamic Typing, where the type of the object is less important than the method it defines
	- Eg: Any type which defines "\_\_len__()" works for us. So it can be str, list, dict, but not int

- ==Type Annotations==
	- These are an additional syntax notifying the user of an expected type of your variables. 
	- These serve as **type hints** for the readers
	- **Not used anyhow by the python compiler**, instead have to use typecheckers (mypy) to do the validation

- Annotation at different places in a function
	- **Annotating arguments**
	def find_workers_available(open_time: ==datetime.datetime==)
	
	- **Annotating  returns**
	def find_workers_available(open_time: datetime.datetime) -> ==list[str]==
	
	- **Annotate variables**
	```python
	workers: list[str] = find_workers_available(open_time)
	numbers: list[int] = []
	ratio: float = get_ratio(5,3)
	```

- ==Benefits== of Type Annotations:
	- **Autocomplete** based on the annotation that was given in the function signature
	- ==**Typecheckers**== help in spotting bugs related to incompatible functions performed on variables

>[!example] Library |  mypy (typechecker tool)
> #tool 
>Its a tool : Eg "mypy" is a popular typechecker
>```python
>pip install mypy
>```
>```python
a: int = 5
a = "string"

		  
- When to use Type Annotations:
	- With functions that are expected to be called in other modules or by other users
	- When a type is complicated


## Types of Type-Annotations
- ==Constraint Types==
	- **Optional Type**
	```python
	def add_numbers(a: int, b: int) -> Optional[int]:
	```

	- **Union Types**
	```python
	def add_numbers(a: int, b: int) -> Union[int, float, None]: 
	```

	- **Literal Types**
	```python
	def add_numbers(a: int , b: int):
		possible_a = Literal[1,2,3,4,5]
		possible_b = Literal[6,7,8,9,10]
	```
	
	- **Final Types**
	```python
	c: Final = 5
	def add_numbers(a: int , b: int):
		 c = a #This throws error, since modification of c is not allowed
	```

- ==Collection Types==

	```python
	a_b_mapping = dict[int, str] # This is collection annotation
	def add_numbers(a: int, b: int) -> List[int]:
	```

>[!tip] Types of collections
>1. Homogenous
>2. Heterogenous: For these cases, consider using ==TypedDict==

**TypedDict:** 
#todo 