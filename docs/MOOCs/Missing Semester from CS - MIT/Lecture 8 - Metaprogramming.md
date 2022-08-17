- `make` command
	- Used to execute `Makefile` 
	- `Makefile` contains instructions and steps to execute commands / build something
	- `target` is either action that is performed / or the output that is generated

- **Software Versioning**
	- Each library maintains its own convention of writing version numbers
	  Eg: 8.7.2 / 64.234234534 etc
	  This can lead to confusion
	-  ==Semantic Versioning==
		- Each group carries some meaning
		- Eg: In 8.7.2:
			- 8 -> major release
				- This is updated only when new code breaks things, eg python 2.7 code will break with python 3.0
			- 7 -> minor release
			- 2 -> patches (eg: security patches)
		- So if nothing changes in the code and is backward compatible, only 2 will change to 3

- **Testing**
  Types of tests
  - ==Unittest==: "**micro-test**" Tests a particular feature
  - ==Integration Testing==: **"macro-test"** Tests the interaction between different components of software
  - ==Regression Testing==: tests a pattern that caused a bug previously
  - ==Mocking==: Replaces a part of the software with a dummy version of itself