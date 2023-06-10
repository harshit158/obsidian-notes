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
- venv
- virtualenv