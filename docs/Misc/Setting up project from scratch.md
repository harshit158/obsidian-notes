- Install `asdf` 
- Install asdf python plugin
- create `.tool-versions` in the project root folder and specify all the versions that need to be installed

```
python 3.11.0 
direnv 2.33.0
```
- do `asdf install` and it will install all those versions
- do `asdf local` to set the installed versions for the local directory
- can verify the set versions using `asdf current`
- create a virtual environment using `python -m venv venv`
- to automatically activate environment when you enter the directory - create `.envrc` and write following into it
  `source venv/bin/activate`
- `.envrc` includes all those environment variables that need to be initialized for that project