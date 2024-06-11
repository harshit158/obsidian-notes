### Encapsulation
The act of combining properties and methods related to an object.
(wrapping up of data members and member functions)

### Inheritance
- Base class and Derived class
- Types of Inheritance:
	- **Single Inheritance**
		- Can inherit from only one class
	- **Multiple Inheritance**
		- Can inherit from multiple classes
	- **Multi-level inheritance**
		- Derived class is the base class from some other class
	- **Hierarchial Inheritance**
		- More than one subclass is inherited from a single base class

![[Pasted image 20240423181556.png]]

### Abstraction
- Hiding the complexity of the underlying program
- Implemented using `abstractmethod` in Python


### Polymorphism
- Can take different forms
- Types:
	- Run-time polymorphism
		- Function ==overriding== - derived class re-defines function in base class
	- Compile-time polymorphism
		- Function ==overloading== (same name but different arguments)
		- Operator overloading (operator is re-defined to behave differently Eg: Langchain Expression Language re-defines \__or__ operator)


### Class Diagrams for UML
https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-class-diagram-tutorial/

![[Pasted image 20240423193926.png]]

### Procedural  Vs Object Oriented Programming

![[Pasted image 20240423194206.png]]

Refs for UML Class diagrams
https://www.youtube.com/watch?v=6XrL5jXmTwM

Thanks Damian
For analyzing the AB testing data - we developed this dashboard to have deeper insights into not only quantitative but qualitative aspects of the experiments.
So this home page shows overall thumbs distribution for 5 experiments performed so far.
Apart from concluding things visually using plots - we have also included appropriate statistical tests in order to support the conclusions statistically.
For eg: for these 2 experiments - we don't have enough evidence that either LLM is better.

Let's go deeper into one of the experiments - lets say the first one - 
So for the thumbs distribution we have the option to remove top contributors and re-analyze the proportion - this is because sometimes the top contributor seems to be favouring one of the LLMs more than the other in an unnatural manner - so we don't want the conclusion to be affected by any one single user.
To give you a real example - 

apart from thumbs distribution - we also get response time and answer length as part of AB data.