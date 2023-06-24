```
conda activate myenv
conda install -c anaconda ipykernel
```

or 

**Step1:** Create and activate new environment
```
python -m venv env_name   # this is for python3

source env_name/bin/activate
```

**Step2:** Install ipykernel in the new environment
```
pip install ipykernel
```

**Step3:** Register the kernel
```
python -m ipykernel install --user --name=env_name
```


---

- Organize all the envs for projects in a single location
- Add alias for those environments

--- 
Ways of creating virtual environment: Using
- pyenv (most recommended) - lets us install multiple versions of python
- venv (python3)
- virtualenv (python2)



### Automatically Activate virtual environment in Python
Ref: https://stackoverflow.com/questions/58433333/auto-activate-virtual-environment-in-visual-studio-code#:~:text=Actually%20the%20earlier%20suggested%20solutions%20didn%27t%20work%20for%20me%2C%20instead%20I%20added%20the%20following%20in%20my%20settings%3A

```yaml
{
"python.defaultInterpreterPath": "./venv/bin/python3",
"python.terminal.activateEnvironment": true
}
```
