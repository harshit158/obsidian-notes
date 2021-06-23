https://github.com/jupyter/notebook/issues/2435

1. `ipython profile create`
This creates a default config file named ==ipython_config.py== at `~/.ipython/profile_default/`

2. Go to `~/.ipython/profile_default/ipython_config.py` and add following line:
`c.Completer.use_jedi = False`

3. Restart Jupyter notebook