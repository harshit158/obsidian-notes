- Each  platform has a Shell, which is a programming language
	- Windows - Powershell
	- Mac - Bash (Bourne Again Shell)
- Shell / Bash is a programming language

- `$` means that you are NOT running the shell as a root user

- `echo $PATH`
	- Lists all the paths where the Shell searches for the program that you typed in the Shell prompt.
	  
- `which echo` -> /bin/echo
	- Tells, if we were to run `echo` command, what file will it exactly run
	  
- `cd /` -> root
  `cd ~` -> home
  `cd -` -> go to the location you were previously at

- File permissions
![[Pasted image 20220801131000.png|500]]
- Changing input and output streams using `<` and `>`
	- `echo < input_file.txt` -> feeding the input   to echo
	- `echo input_file.txt > output_file.txt` -> stream the output of echo command to other file

- `command1 | command2`
	- `|` gives the output of command 1 to command 2
	- Eg: ls | grep 

- Space is important in shell scripting
	- `foo = bar` will give error while `foo=bar` won't

- `source mcd.sh` : source used to read and execute the shell files

- Shortcuts in shell:
	- `!!` -> Copies the last command that was run
		- Eg: `sudo !!` will replace `!!` with the last command that was run
	- `$_` -> Copies last argument of the previous command
		- Eg: `mkdir test`, then
				 `cd $_` translates to `cd test`
	- `$?` -> Error code for last command
		- Eg: `grep foobar somefile.sh`
				`echo $?` -> 1 since grep didn't find anything

- `;` - semicolon is a command separator

- `tldr` - command that summarizes the "man" pages of commands

- `find` - command to find files
  `locate` - is another alternative

- `history` to see the history of all commands

- `tree` to see the directory structure