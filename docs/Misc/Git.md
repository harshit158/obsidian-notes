![[Pasted image 20230425013249.png]]



- How to checkout to a remote branch on your local
```shell
git fetch origin
git checkout -b fix-failing-tests origin/fix-failing-tests
```

- To push to a new branch on remote:
```shell
git push -u origin <branch-name>
```

- git config can be set at 3 levels:
	- At project level
		- git config ==--local==
	- At global level
		- git config ==--global==
	- At system level
		- git config ==--system==



### Access Private Repos
- Create a personal access token in your github account
- Clone using https
- When it prompts for password: enter your access token instead of github password