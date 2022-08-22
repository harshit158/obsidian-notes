### Dependencies
- DRY Principle (Don't repeat yourself)
	- Don’t deduplicate code just because it looks the same; deduplicate it only if that code has the same reasons to change

**Visualizing Packages**
>[!tip] Library - pipdeptree
> #tool 

**Visualizing Imports**
>[!tip] Library - pydeps
> #tool 

**Visualizing Function Calls**
>[!tip] Library - pyan3
> #tool 


- **Fan-in VS Fan-out**
	- **Fan-in** : Lot of files depend on me
		- ==Least updates== should be done in this file
		- Should be at the ==bottom of call graph== 
	- **Fan-out** : I depend on a lot of files
		- These files can be ==updated frequently==
		- Should be at the ==top of call graph==
 ![[Pasted image 20220817165849.png]]

---

### Composability
- Building small components with minimal interdependencies and little business logic embedded inside
- By keeping the components mostly free of business logic, you allow your code to solve new problems

- **Policy Versus Mechanisms**
	- ==Policies==:
		- Policies are your business logic, or the code directly responsible for solving your business needs
		- If multiple policies are combined - it creates a sphagetti code
	- ==Mechanisms==:
		- The mechanisms are the pieces of code that provide how you will enact the policies.
		- Want to reuse the mechanisms
	- Important to identify which parts of the codebase  are policies and which are mechanisms


- **Composing Functions**
	- ==Pure functions==: a function whose output is solely derived from the inputs.
	- ==Side Effect==: A side effect is anything a function does that is ==outside of its returned values==, such as logging a message, making a network call, or mutating variables.

>[!tip] Tips
>1. Remove side effects from functions to make it easier to reuse them
>2. Write short, single-purpose functions

- **Decorators** : 
	- functions that wrap other functions
	- can modify function behavior without messing with the function body

>[!tip] Library | backoff
> #tool 
>backoff helps you define retry logic, or the actions you take to retry nondeterministic parts of your code

>[!tip] Library | [timeout_decorator](https://github.com/pnpnpn/timeout-decorator)
> #tool 

