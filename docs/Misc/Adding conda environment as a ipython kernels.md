```
conda activate myenv
conda install -c anaconda ipykernel
```

or 

**Step1:** Create and activate new environment
```
python -m venv env_name

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